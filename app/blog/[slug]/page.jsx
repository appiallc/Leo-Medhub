import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BlogPostShell from "@/app/components/blog/BlogPostShell";
import PostBody from "@/app/components/blog/PostBody";
import PostFaqs from "@/app/components/blog/PostFaqs";
import ShareSection from "@/app/components/blog/ShareSection";
import { getAdjacentPosts, getFaqs, getPostBySlug, getPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

function absoluteOgImage(url) {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  return `${SITE_URL}${url}`;
}

export async function generateStaticParams() {
  const { posts } = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | Leo Medhub" };
  }
  const url = `${SITE_URL}/blog/${slug}`;
  const description =
    post.excerpt?.trim() ||
    `Read ${post.title} on the Leo Medhub blog—virtual healthcare staffing, medical billing, and integrated practice support.`;
  const ogImage = absoluteOgImage(post.image);

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      ...(ogImage ? { images: [{ url: ogImage, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const faqs = post.faqs?.length ? post.faqs : await getFaqs("blogs");
  const { prev, next } = await getAdjacentPosts(slug);

  const imageSrc = post.image || "/leoMedhubLogo.png";
  const introText = post.intro?.trim() || post.excerpt?.trim() || "";
  const dateLabel = post.publishedAt
    ? new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(
        new Date(post.publishedAt)
      )
    : null;
  const authorLabel = post.authorName?.trim() || "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: introText || undefined,
    datePublished: post.publishedAt || undefined,
    dateModified: post.publishedAt || undefined,
    image: absoluteOgImage(imageSrc),
    publisher: {
      "@type": "Organization",
      name: "Leo Medhub",
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
    ...(authorLabel
      ? {
          author: {
            "@type": "Person",
            name: authorLabel,
          },
        }
      : {}),
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <main className="pb-16">
        <div className="border-b border-[#293675]/10 bg-gradient-to-r from-white via-red-50/35 to-blue-50/60">
          <div className="mx-auto max-w-6xl px-4 pt-8 sm:pt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-medium text-[#293675] transition hover:text-[#d63227]"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>

        <BlogPostShell>
          <article className="mx-auto max-w-5xl px-4 pt-10 sm:pt-12">
            <header className="rounded-[2rem] border border-[#293675]/10 bg-gradient-to-br from-white via-white to-blue-50/50 px-6 py-8 shadow-[0_24px_70px_-45px_rgba(41,54,117,0.35)] sm:px-8">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#293675]">
                Blog
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#293675] sm:text-4xl md:text-[2.5rem]">
                {post.title}
              </h1>
              {dateLabel || authorLabel ? (
                <p className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-sm text-gray-500">
                  {dateLabel ? (
                    <time dateTime={post.publishedAt}>{dateLabel}</time>
                  ) : null}
                  {dateLabel && authorLabel ? (
                    <span
                      className="select-none text-gray-300"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  ) : null}
                  {authorLabel ? (
                    <span className="font-serif text-base font-bold text-gray-600">
                      — {authorLabel}
                    </span>
                  ) : null}
                </p>
              ) : null}
            </header>

            {introText ? (
              <p className="mt-8 max-w-full rounded-3xl border-l-4 border-[#d63227] bg-white/90 px-5 py-5 text-base leading-relaxed text-gray-700 shadow-sm sm:text-lg">
                {introText}
              </p>
            ) : null}

            {post.tags?.length ? (
              <div className="mt-6 flex flex-wrap justify-start gap-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#293675]/10 bg-gradient-to-r from-red-600 to-blue-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-[2rem] border border-[#293675]/10 bg-gradient-to-br from-red-50 via-white to-blue-50 shadow-[0_28px_70px_-36px_rgba(41,54,117,0.35)]">
              <Image
                src={imageSrc}
                alt={`Cover: ${post.title}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-contain p-6 sm:p-10"
              />
            </div>

            <div className="mt-8 border-t border-[#293675]/10 pt-10">
              <PostBody value={post.body} />
            </div>
          </article>
        </BlogPostShell>

        <PostFaqs faqs={faqs} />
        <ShareSection title={post.title} slug={slug} />

        <nav
          className="mx-auto mt-14 max-w-5xl border-t border-[#293675]/10 px-4 pt-10"
          aria-label="Previous and next posts"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
            <div className="sm:w-[45%]">
              {prev ? (
                <>
                  <p className="mb-1 text-xs uppercase tracking-wide text-[#293675]/70">
                    Previous
                  </p>
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="font-medium text-[#293675] hover:text-[#d63227]"
                  >
                    {prev.title}
                  </Link>
                </>
              ) : (
                <span className="text-sm text-gray-400">First Article</span>
              )}
            </div>
            <div className="sm:w-[45%] sm:text-right">
              {next ? (
                <>
                  <p className="mb-1 text-xs uppercase tracking-wide text-[#293675]/70">
                    Next
                  </p>
                  <Link
                    href={`/blog/${next.slug}`}
                    className="font-medium text-[#293675] hover:text-[#d63227]"
                  >
                    {next.title}
                  </Link>
                </>
              ) : (
                <span className="block text-sm text-gray-400">
                  Latest Article
                </span>
              )}
            </div>
          </div>
        </nav>
      </main>
    </div>
  );
}
