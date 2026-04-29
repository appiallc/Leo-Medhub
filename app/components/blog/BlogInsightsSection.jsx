"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe2, Layers, Sparkles } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Layers,
    title: "Integrated Revenue Cycle",
    description:
      "Align scheduling, documentation, and billing so claims go out clean—the same end-to-end thinking behind our RCM and coding services.",
  },
  {
    icon: Globe2,
    title: "Virtual Healthcare Staffing",
    description:
      "How remote coordinators, billers, and admins work with your in-house team—with clear ownership and US-based account oversight.",
  },
  {
    icon: Sparkles,
    title: "Practical Operations & Tools",
    description:
      "What to fix in process first, when to add technology, and how to avoid one-size-fits-all playbooks for your specialty.",
  },
];

export default function BlogInsightsSection() {
  return (
    <section
      className="relative overflow-hidden border-b border-[#293675]/10 bg-gradient-to-b from-white via-red-50/30 to-blue-50/45"
      aria-labelledby="blog-insights-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#293675]/20 to-[#d63227]/20"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#293675]">
            Why read our blog
          </p>
          <h2
            id="blog-insights-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-[#293675] sm:text-3xl lg:text-[2rem]"
          >
            Optimizing Healthcare Through Integrated Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
            Articles from Leo Medhub—focused on clarity, trade-offs, and outcomes
            for practice leaders building stronger virtual staffing and billing
            operations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col rounded-2xl border border-[#293675]/10 bg-white/90 p-6 shadow-sm ring-1 ring-[#293675]/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-[#293675]/20 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-red-600 to-blue-700 text-white shadow-md shadow-[#293675]/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#293675]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#293675]/10 bg-gradient-to-r from-red-50 via-white to-blue-50 px-6 py-8 text-center shadow-sm sm:flex-row sm:justify-between sm:px-10 sm:text-left"
        >
          <div>
            <p className="text-sm font-semibold text-[#293675]">
              Ready to unlock your practice&apos;s potential?
            </p>
            <p className="mt-1 text-base font-medium text-[#293675] sm:text-lg">
              Tell us about your goals—we&apos;ll help you scope virtual
              healthcare staffing and medical billing support that fits.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#293675]/25 transition hover:opacity-95"
          >
            Schedule a free consultation
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
