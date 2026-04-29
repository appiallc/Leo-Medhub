"use client";

import { motion } from "framer-motion";
import { ArrowDown, BookOpen, Sparkles } from "lucide-react";

const topics = [
  "Virtual Healthcare Staffing",
  "Medical Billing & RCM",
  "Credentialing & Coding",
  "Patient Access & Admin",
];

export default function BlogHero({ postCount }) {
  const countLabel =
    typeof postCount === "number" && postCount > 0 ? String(postCount) : "—";

  return (
    <section className="relative overflow-hidden border-b border-[#293675]/10 bg-gradient-to-br from-white via-red-50/40 to-blue-50/70">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#d63227]/[0.12] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[10%] top-1/3 h-[360px] w-[360px] rounded-full bg-[#293675]/[0.10] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#d63227]/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 h-[240px] w-[240px] rounded-full bg-[#293675]/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#293675]/25 to-[#d63227]/25"
        aria-hidden
      />

      <p
        className="pointer-events-none absolute -left-4 top-1/2 hidden -translate-y-1/2 select-none font-bold uppercase leading-none text-[clamp(4rem,18vw,12rem)] text-gray-900/[0.04] sm:block"
        aria-hidden
      >
        Blog
      </p>

      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-[#293675]/15 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#293675] shadow-sm backdrop-blur-sm"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Blog
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#293675] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.06]"
            >
              Ideas for{" "}
              <span className="bg-gradient-to-r from-red-600 via-[#d63227] to-blue-700 bg-clip-text text-transparent">
                stronger operations
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg"
            >
              Leo Medhub delivers comprehensive virtual healthcare staffing and
              medical billing solutions—here we share practical guidance on
              revenue cycle, compliance, and patient access so your practice
              can keep growing with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {topics.map((label) => (
                <span
                  key={label}
                  className="rounded-lg border border-[#293675]/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#293675] shadow-sm backdrop-blur-sm sm:text-sm"
                >
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.a
              href="#blog-posts"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#293675] transition hover:text-[#d63227]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#293675]/15 bg-white shadow-sm">
                <ArrowDown className="h-4 w-4" aria-hidden />
              </span>
              Browse Articles
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#293675]/10 bg-white p-8 shadow-[0_24px_80px_-24px_rgba(41,54,117,0.28)]">
              <div
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d63227]/10 blur-2xl"
                aria-hidden
              />
              <div
                className="absolute -bottom-12 left-1/3 h-32 w-32 rounded-full bg-[#293675]/10 blur-2xl"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 text-white shadow-lg shadow-[#293675]/20">
                    <BookOpen className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="rounded-full border border-[#293675]/10 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#293675]">
                    Leo Medhub
                  </span>
                </div>
                <p className="mt-6 text-sm font-medium uppercase tracking-wider text-gray-500">
                  From Leo Medhub
                </p>
                <p className="mt-2 text-lg font-semibold leading-snug text-[#293675]">
                  Short reads on integrated staffing, billing, and the workflows
                  that keep your practice running smoothly.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#293675]/10 pt-8">
                  <div>
                    <p className="text-3xl font-bold tabular-nums text-[#293675]">
                      {countLabel}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                      Articles
                    </p>
                  </div>
                  <div className="flex flex-col justify-end text-right">
                    <p className="text-sm font-semibold leading-snug text-[#293675]">
                      Staffing, billing & operations—in every piece.
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wide text-gray-500">
                      What you&apos;ll read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
