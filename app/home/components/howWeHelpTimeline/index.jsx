"use client";

import { useEffect, useRef, useState } from "react";
import { FaSearch, FaHandshake, FaRocket, FaCogs, FaUsers } from "react-icons/fa";

const steps = [
  {
    id: "discover",
    title: "Discover, Explore And Customize",
    description:
      "Discover how our solutions align with your practice needs and receive a tailored proposal.",
    side: "left",
    icon: <FaSearch size={36}/>,
  },
  {
    id: "partner",
    title: "Partner With Leo Medhub",
    description:
      "Finalize the partnership agreement once satisfied that we meet your requirements.",
    side: "right",
    icon: <FaHandshake size={36}/>,
  },
  {
    id: "kickstart",
    title: "Kick-start Your Journey",
    description:
      "Connect with your dedicated account manager to plan a smooth implementation.",
    side: "left",
    icon: <FaRocket size={36}/>,
  },
  {
    id: "implementation",
    title: "Implementation",
    description:
      "Our team prepares for operational excellence through structured training and documentation.",
    side: "right",
    icon: <FaCogs size={36}/>,
  },
  {
    id: "launch",
    title: "Launch Your Virtual Team",
    description:
      "Launch your virtual medical team and track performance with ongoing support.",
    side: "left",
    icon: <FaUsers size={36}/>,
  },
];

export default function HowWeHelpTimeline() {
  const [activeStep, setActiveStep] = useState(null);
  const stepRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      steps.forEach((step, index) => {
        const el = stepRefs.current[step.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveStep(steps[closestIndex].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = steps.findIndex((s) => s.id === activeStep);
  const progressHeight = ((activeIndex + 1) / steps.length) * 100;

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-20 bg-white">
      {/* Vertical line */}
      <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[4px] bg-gray-200">
        <div
          className="w-full bg-[#293675] transition-all duration-500"
          style={{ height: `${progressHeight}%` }}
        />
      </div>

      <div className="space-y-28">
        {steps.map((step, index) => {
          const isActive = activeStep === step.id;
          const isVisited = index <= activeIndex;
          const isLeft = step.side === "left";

          return (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[step.id] = el)}
              className={`relative flex flex-col lg:flex-row ${
                isLeft ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              {/* Content box */}
              <div
                className={`lg:w-[45%] p-6 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-red-50 border-l-4 border-[#293675]"
                      : isVisited
                      ? "bg-red-50/50 border-l-4 border-[#293675]"
                      : "bg-white border-l-4 border-transparent"
                  }`}
              >
                <h3
                  className={`text-xl font-bold transition-colors ${
                    isActive
                      ? "text-[#293675]"
                      : isVisited
                      ? "text-[#293675]"
                      : "text-gray-800"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>

              {/* Section-related icon (OPPOSITE SIDE) */}
              <div
                className={`hidden lg:flex absolute top-1/2 -translate-y-1/2
                  ${
                    isLeft
                      ? "left-[calc(50%+3.5rem)]"
                      : "left-[calc(50%-8.5rem)]"
                  }`}
              >
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-lg transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-red-600 to-blue-700 text-white scale-110"
                        : isVisited
                        ? "bg-gradient-to-r from-red-600 to-blue-700 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                >
                  {step.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
