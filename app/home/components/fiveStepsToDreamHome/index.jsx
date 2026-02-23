"use client";

import { useEffect, useRef, useState } from "react";

const ORANGE = "#d63227";

const steps = [
  {
    step: "01",
    title: "Consultation & Strategy",
    description:
      "We start by understanding your practice, goals, and operational challenges to design a customized solution tailored to your needs.",
    side: "left",
  },
  {
    step: "02",
    title: "Agreement & Alignment",
    description:
      "Once you are confident in our approach, we finalize the partnership and align on deliverables, expectations, and timelines.",
    side: "right",
  },
  {
    step: "03",
    title: "Onboarding & Preparation",
    description:
      "You will work with your dedicated account manager to plan workflows and implementation strategies.",
    side: "left",
  },
  {
    step: "04",
    title: "Training & System Integration",
    description:
      "Our team prepares for launch with structured training, documentation, and workflow optimization for operational excellence.",
    side: "right",
  },
  {
    step: "05",
    title: "Go Live & Performance Monitoring",
    description:
      "Your virtual medical team goes live. We continuously monitor performance, provide updates, and optimize for sustained success.",
    side: "left",
  },
];

function StepCard({ item, isLeft }) {
  return (
    <div
      className={`w-full flex rounded-2xl overflow-hidden shadow-lg ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      style={{ backgroundColor: ORANGE }}
    >
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center min-w-0">
        <h3 className="text-xl md:text-2xl font-bold text-white">{item.title}</h3>
        <p className="mt-2 text-white/95 text-sm md:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
      <div
        className={`flex flex-col justify-center items-center px-6 py-4 shrink-0 border-white/20 ${isLeft ? "border-l" : "border-r"}`}
      >
        <span className="text-white/90 text-xs font-medium uppercase tracking-wider">Step</span>
        <span className="text-2xl md:text-3xl font-bold text-white">{item.step}</span>
      </div>
    </div>
  );
}

export default function FiveStepsToDreamHome() {
  const [visibleSteps, setVisibleSteps] = useState({});
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, index) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => ({ ...prev, [index]: true }));
            }
          });
        },
        { rootMargin: "-40px 0px -40px 0px", threshold: 0.15 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="w-full overflow-x-hidden px-6 md:px-12 lg:px-24 py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span style={{ color: ORANGE }}>How Leo Medhub Brings Your Vision to Life</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-600">
            A streamlined{" "}
            <span className="font-bold" style={{ color: ORANGE }}>
              5-Step
            </span>{" "}
            process to success
          </p>
        </div>

        <div className="relative">
          {/* Central dashed line - desktop only */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0 border-l-2 border-dashed -translate-x-1/2 hidden lg:block opacity-70"
            style={{ borderColor: ORANGE }}
            aria-hidden
          />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((item, index) => {
              const isLeft = item.side === "left";
              const isVisible = visibleSteps[index];

              return (
                <div
                  key={item.step}
                  ref={(el) => (stepRefs.current[index] = el)}
                >
                  {/* Mobile: slide in from left/right (same as desktop) */}
                  <div
                    className="lg:hidden transition-all duration-700 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : isLeft
                          ? "translateX(-100%)"
                          : "translateX(100%)",
                      transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <StepCard item={item} isLeft={isLeft} />
                  </div>

                  {/* Desktop: slide in from left/right (off-screen) */}
                  <div
                    className="hidden lg:flex lg:items-stretch lg:min-h-[120px] transition-all duration-700 ease-out"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : isLeft
                          ? "translateX(-100%)"
                          : "translateX(100%)",
                      transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    <div className={`flex-1 flex justify-end pr-6 ${isLeft ? "" : "invisible"}`}>
                      {isLeft && (
                        <div className="w-full max-w-[calc(100%-24px)]">
                          <StepCard item={item} isLeft={true} />
                        </div>
                      )}
                    </div>
                    <div className="flex-shrink-0 w-4 flex justify-center items-center relative z-10">
                      <div
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: ORANGE }}
                        aria-hidden
                      />
                    </div>
                    <div className={`flex-1 flex justify-start pl-6 ${!isLeft ? "" : "invisible"}`}>
                      {!isLeft && (
                        <div className="w-full max-w-[calc(100%-24px)]">
                          <StepCard item={item} isLeft={false} />
                        </div>
                      )}
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
