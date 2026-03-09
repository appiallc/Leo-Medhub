"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const SCROLL_DURATION = 40; // seconds for one full cycle

const data = [
  {
    title: "Revenue Cycle Management",
    img: "/slider/service-1.jpg",
  },
  {
    title: "Virtual Healthcare Staffing",
    img: "/slider/service-2.jpg",
  },
  {
    title: "Medical Billing Services",
    img: "/slider/service-3.jpg",
  },
  {
    title: "Medical Coding Services",
    img: "/slider/service-4.jpg",
  },
  {
    title: "Virtual Healthcare Staffing",
    img: "/slider/service-5.jpg",
  },
  {
    title: "Medical Billing Services",
    img: "/slider/service-6.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="w-full py-16 px-4 md:px-10 lg:px-20 bg-white"
    >
      {/* Heading */}
      <div className="mb-10">
        <span className="inline-block border border-[#293675] text-[#293675] px-4 py-1 rounded-full font-medium mb-4">
          Our Services
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Optimizing Healthcare <br />
          <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Through Integrated Solutions</span>
        </h2>
      </div>

      {/* Auto-scrolling horizontal slider */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes services-marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .services-marquee {
          animation: services-marquee-scroll ${SCROLL_DURATION}s linear infinite;
        }
        .services-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="overflow-x-hidden w-full pb-4 no-scrollbar">
        <div className="flex gap-6 w-max services-marquee">
          {/* Duplicate data for seamless infinite loop */}
          {[...data, ...data].map((item, i) => (
            <div
              key={i}
              className="
                relative rounded-2xl
                w-[260px] sm:w-[300px] md:w-[340px] lg:w-[360px] flex-shrink-0
                h-[500px]
                cursor-pointer group
                bg-white shadow-lg
              "
            >
              <button
                className="
                  absolute top-3 right-3 z-20
                  bg-white rounded-full p-2 shadow-md
                  group-hover:bg-red-700 transition
                "
              >
                <ArrowUpRight className="w-5 h-5 text-red-700 group-hover:text-white" />
              </button>

              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 bg-black/40 group-hover:scale-105"
                />
                <div
                  className="
                    absolute inset-0 bg-black/60
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                  "
                />
              </div>

              <div
                className="
                  absolute bottom-0 left-0 right-0 z-30
                  bg-white px-5 py-4
                  border-t border-gray-200
                  rounded-b-2xl
                  transition-colors duration-300
                  group-hover:bg-red-700
                "
              >
                <p
                  className="
                    text-red-700 text-xl font-semibold
                    transition-colors duration-300
                    group-hover:text-white
                  "
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
