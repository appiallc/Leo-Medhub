"use client";

import BlogCard from "./BlogCard";
import { PAGE_SIZE } from "@/lib/pagination";

export default function BlogList({
  posts,
  page = 1,
  totalPages = 1,
  totalCount,
}) {
  if (!posts?.length) {
    return (
      <p className="rounded-2xl border border-dashed border-gray-200 bg-gray-50/80 px-6 py-12 text-center text-gray-600">
        No articles yet. Check back soon for updates on virtual healthcare
        staffing, medical billing, and practice operations.
      </p>
    );
  }

  const total = typeof totalCount === "number" ? totalCount : posts.length;
  const rangeStart = (page - 1) * PAGE_SIZE + 1;
  const rangeEnd = Math.min(page * PAGE_SIZE, total);

  return (
    <div>
      <div className="mb-10 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#293675]">
          Insights
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#293675] sm:text-3xl">
          Latest Articles
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Practical guidance on virtual staffing, billing, and operations—so
          you can strengthen revenue and patient access with confidence.
        </p>
        {totalPages > 1 ? (
          <p className="mt-3 text-sm text-gray-500">
            Showing {rangeStart}–{rangeEnd} of {total}
          </p>
        ) : null}
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {posts.map((post, index) => (
          <BlogCard key={post._id ?? post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
}
