import BlogHero from "@/app/components/blog/BlogHero";
import BlogInsightsSection from "@/app/components/blog/BlogInsightsSection";
import BlogList from "@/app/components/blog/BlogList";
import Pagination from "@/app/components/pagination";
import { getPosts } from "@/lib/blog";
import { paginate, parsePageParam } from "@/lib/pagination";
import { SITE_URL } from "@/lib/site";

export const revalidate = 60;

export async function generateMetadata({ searchParams }) {
  const sp = await Promise.resolve(searchParams);
  const page = parsePageParam(sp?.page);
  const canonical =
    page <= 1 ? `${SITE_URL}/blog` : `${SITE_URL}/blog?page=${page}`;

  return {
    title: "Blog | Leo Medhub",
    description:
      "Articles from Leo Medhub on virtual healthcare staffing, medical billing, revenue cycle management, and integrated practice operations—helping practices unlock their full potential.",
    openGraph: {
      title: "Blog | Virtual Healthcare Staffing & Medical Billing | Leo Medhub",
      description:
        "Practical guidance on RCM, credentialing, patient access, and remote support—the same integrated solutions we deliver for healthcare practices every day.",
      url: page <= 1 ? `${SITE_URL}/blog` : `${SITE_URL}/blog?page=${page}`,
    },
    alternates: { canonical },
  };
}

export default async function BlogPage({ searchParams }) {
  const sp = await Promise.resolve(searchParams);
  const pageParam = parsePageParam(sp?.page);
  const { posts } = await getPosts();
  const { slice, total, totalPages, page } = paginate(posts, pageParam);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-blue-50/30">
      <main>
        <BlogHero postCount={total} />
        <BlogInsightsSection />
        <section
          id="blog-posts"
          className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:py-16 lg:py-20"
        >
          <BlogList
            posts={slice}
            page={page}
            totalPages={totalPages}
            totalCount={total}
          />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath="/blog"
            hash="blog-posts"
          />
        </section>
      </main>
    </div>
  );
}
