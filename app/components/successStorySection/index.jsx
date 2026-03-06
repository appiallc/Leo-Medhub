"use client";

import Image from "next/image";

const defaultContent = {
  badge: "Primary care practice · 3 providers · U.S. East Coast",
  headline: "From overwhelmed front desk to",
  headlineHighlight: "coordinated virtual support",
  challenge:
    "The clinic struggled with long hold times, manual reminder calls, and same-day cancellations that disrupted provider schedules and frustrated patients.",
  quote:
    "Within weeks, our Virtual Healthcare Assistant felt like part of the team. Patients get reminders, calls are answered, and our providers walk into prepared schedules instead of crowded inboxes.",
  attribution: "Practice Manager, Community Primary Care Group",
  solution:
    "A dedicated Virtual Healthcare Assistant from Leo Medhub took over inbound calls, appointment scheduling, reminder workflows, and EMR task routing—working entirely within the clinic's existing systems and processes.",
  results: [
    "40% reduction in administrative workload for front-desk staff",
    "Faster, more reliable patient scheduling and confirmations",
    "Improved patient communication and follow-up completion",
  ],
  statValue: "40%",
  statLabel: "reduction in administrative workload",
  statSubtext:
    "Plus faster scheduling and stronger patient communication across every clinic day.",
  imageSrc: "/slider/expertise.jpg",
  imageAlt: "Clinic team working with virtual assistant",
};

export default function SuccessStorySection({ content = defaultContent }) {
  const c = content;
  return (
    <section
      className="w-full py-16 md:py-20 bg-gradient-to-b from-[#F9FAFB] to-white"
      aria-labelledby="success-story-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <span className="inline-block border border-[#293675] text-[#293675] px-4 py-1 rounded-full font-medium mb-6">
          Success Story
        </span>

        <div className="rounded-3xl bg-white border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wide text-red-700 font-semibold">
                {c.badge}
              </p>

              <h2
                id="success-story-heading"
                className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight"
              >
                {c.headline}{" "}
                <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                  {c.headlineHighlight}
                </span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base">{c.challenge}</p>

              <div className="border-l-4 border-red-600 pl-4 py-3 bg-red-50/70 rounded-md">
                <blockquote>
                  <p className="text-sm md:text-base text-gray-800 italic">
                    &quot;{c.quote}&quot;
                  </p>
                  <cite className="mt-2 text-xs md:text-sm font-semibold text-gray-700 not-italic block">
                    {c.attribution}
                  </cite>
                </blockquote>
              </div>

              <div className="space-y-2 text-sm md:text-base text-gray-700">
                <p className="font-semibold">Solution</p>
                <p>{c.solution}</p>
              </div>

              <div className="space-y-1 text-sm md:text-base text-gray-700">
                <p className="font-semibold">Results</p>
                <ul className="list-disc list-inside space-y-1">
                  {c.results.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src={c.imageSrc}
                  alt={c.imageAlt}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent rounded-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 flex flex-col gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-red-700">
                    {c.statValue}
                  </span>
                  <span className="text-sm md:text-base text-gray-700">
                    {c.statLabel}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-700">{c.statSubtext}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
