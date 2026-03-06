"use client";

import { CheckCircle2, Activity, Users, LayoutGrid, Shield, FileCheck, Phone, Headphones } from "lucide-react";

const iconMap = {
  tracker: Activity,
  team: Users,
  services: LayoutGrid,
  shield: Shield,
  file: FileCheck,
  phone: Phone,
  support: Headphones,
  default: CheckCircle2,
};

export default function BenefitSection({
  heading,
  content,
  benefits = [],
}) {
  return (
    <section
      className="w-full py-16 md:py-20 bg-white"
      aria-labelledby="benefit-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Heading + content */}
          <div>
            <h2
              id="benefit-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
            >
              {heading}
            </h2>
            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              {content}
            </p>
          </div>

          {/* Right: Rounded border content boxes */}
          <div className="grid sm:grid-cols-1 gap-4">
            {benefits.map((item, index) => {
              const IconComponent = iconMap[item.icon] || iconMap.default;
              return (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-gray-200 p-6 hover:border-red-200 hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#293675] flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
