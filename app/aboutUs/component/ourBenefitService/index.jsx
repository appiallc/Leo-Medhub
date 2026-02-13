"use client";

import {
  FaHeadset,
  FaUserCheck,
  FaComments,
  FaChartLine,
  FaUserCog,
  FaShieldAlt,
} from "react-icons/fa";

const benefits = [
  {
    title: "Exceptional Customer Service",
    icon: FaHeadset,
  },
  {
    title: "Full Accountability",
    icon: FaUserCheck,
  },
  {
    title: "Transparent Client Communication",
    icon: FaComments,
  },
  {
    title: "Transparent Productivity Reporting",
    icon: FaChartLine,
  },
  {
    title: "Dedicated Remote Staff Supervision",
    icon: FaUserCog,
  },
  {
    title: "Enterprise IT Support and Protection",
    icon: FaShieldAlt,
  },
];

export default function ServiceBenefits() {
  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-28">
      {/* Decorative Blur */}
      <div className="absolute right-10 top-40 h-40 w-40 rounded-full bg-red-200 opacity-40 blur-3xl" />

      {/* Header */}
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent sm:text-4xl lg:text-5xl">
          Our Services Benefits
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-gray-600 sm:text-lg">
          With over 14 years of industry experience, we continue to advance our capabilities
          to deliver exceptional service through:
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-24 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl bg-white px-6 pb-8 pt-14 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
               
                {/* Icon Circle */}
<div className="absolute -top-10 left-1/2 -translate-x-1/2">
  <div className="relative flex h-20 w-20 items-center justify-center rounded-full
    bg-[#293675]
    shadow-lg
  ">
    {/* Light Border Ring */}
    <span className="absolute inset-[-6px] rounded-full border border-red-300/60"></span>

    {/* Soft Glow */}
    <span className="absolute inset-[-14px] rounded-full bg-red-400/20 blur-2xl"></span>

    {/* Icon */}
    <Icon className="relative z-10 text-3xl text-white" />
  </div>
</div>

                {/* Title */}
                <p className="mt-6 text-base font-medium text-gray-700 sm:text-lg">
                  {item.title}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-2xl bg-[#293675]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
