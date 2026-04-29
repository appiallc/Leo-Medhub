import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]
    | order(publishedAt desc, _createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      intro,
      coverImage{
        ...,
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        }
      },
      "coverImageUrl": coverImage.asset->url,
      authorName,
      publishedAt,
      tags,
      body[]{
        ...,
        asset->{
          _id,
          url,
          metadata {
            dimensions
          }
        }
      }
    }
`;

const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    intro,
    coverImage{
      ...,
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    },
    "coverImageUrl": coverImage.asset->url,
    authorName,
    publishedAt,
    tags,
    faqs[]{
      _key,
      question,
      answer
    },
    body[]{
      ...,
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      }
    }
  }
`;

const FAQS_QUERY = groq`
  *[_type == "faq" && page == $page][0] {
    _id,
    page,
    faqs[]{
      _key,
      question,
      answer
    }
  }
`;

async function sanityFetch(query, params = {}) {
  return client.fetch(query, params, { next: { revalidate: 60 } });
}

function imageUrl(source, directUrl) {
  if (!source) return "/leoMedhubLogo.png";
  if (typeof source === "string") return source;
  if (typeof directUrl === "string" && directUrl) return directUrl;
  if (typeof source?.asset?.url === "string" && source.asset.url) {
    return source.asset.url;
  }

  try {
    return urlFor(source).width(1200).height(675).fit("crop").auto("format").url();
  } catch {
    return "/leoMedhubLogo.png";
  }
}

function extractTextFromBody(body = []) {
  return body
    .flatMap((block) => {
      if (block?._type !== "block" || !Array.isArray(block.children)) return [];
      return block.children.map((child) => child?.text || "");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateReadTime({ intro = "", body = [] }) {
  const words = `${intro} ${extractTextFromBody(body)}`.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function mapPost(post) {
  if (!post) return null;

  return {
    _id: post._id,
    slug: post.slug,
    title: post.title || "Untitled",
    excerpt: post.excerpt || "",
    intro: post.intro || "",
    publishedAt: post.publishedAt || null,
    image: imageUrl(post.coverImage, post.coverImageUrl),
    coverImage: post.coverImage || null,
    category: post.tags?.[0] || "Leo Medhub",
    readTime: estimateReadTime(post),
    body: Array.isArray(post.body) ? post.body : [],
    faqs: Array.isArray(post.faqs)
      ? post.faqs
          .map((faq, index) => ({
            _key: faq._key ?? `${faq.question || "faq"}-${index}`,
            question: faq.question?.trim() || "",
            answer: faq.answer?.trim() || "",
          }))
          .filter((faq) => faq.question && faq.answer)
      : [],
    tags: Array.isArray(post.tags) ? post.tags : [],
    authorName: post.authorName?.trim() || "Leo Medhub",
  };
}

export async function getPosts() {
  const posts = await sanityFetch(POSTS_QUERY);
  return {
    posts: posts.map(mapPost),
  };
}

export async function getPostBySlug(slug) {
  const post = await sanityFetch(POST_BY_SLUG_QUERY, { slug });
  return mapPost(post);
}

export async function getAdjacentPosts(slug) {
  const { posts } = await getPosts();
  const idx = posts.findIndex((post) => post.slug === slug);

  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx >= 0 && idx < posts.length - 1 ? posts[idx + 1] : null,
  };
}

function normalizeFaqPage(page = "blogs") {
  return String(page).replace(/^\/+|\/+$/g, "").toLowerCase() || "blogs";
}

export async function getFaqs(page = "blogs") {
  const faqDocument = await sanityFetch(FAQS_QUERY, {
    page: normalizeFaqPage(page),
  });

  return Array.isArray(faqDocument?.faqs)
    ? faqDocument.faqs
        .map((faq, index) => ({
          _key: faq._key ?? `${faq.question || "faq"}-${index}`,
          question: faq.question?.trim() || "",
          answer: faq.answer?.trim() || "",
        }))
        .filter((faq) => faq.question && faq.answer)
    : [];
}
