"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#293675]/10 bg-white shadow-sm transition-shadow hover:border-[#293675]/20 hover:shadow-[0_18px_45px_-24px_rgba(41,54,117,0.35)]"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[16/9] bg-gradient-to-br from-red-50 via-white to-blue-50"
      >
        <Image
          src={post.image}
          alt=""
          fill
          className="object-contain p-6"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
          <span className="rounded-full bg-blue-50 px-2.5 py-1 font-medium text-[#293675]">
            {post.category}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mb-2 text-lg font-semibold leading-snug text-[#293675]">
          <Link
            href={`/blog/${post.slug}`}
            className="rounded hover:text-[#d63227] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d63227]"
          >
            {post.title}
          </Link>
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-sm font-medium text-[#d63227] hover:text-[#293675] hover:underline"
        >
          Read Article
          <span className="ml-1" aria-hidden>
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
