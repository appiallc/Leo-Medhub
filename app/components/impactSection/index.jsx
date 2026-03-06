"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function ImpactSection({
  badge = "Our Impact",
  headline,
  highlight,
  description,
  metrics = [],
}) {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setInView(true);
        else setInView(false);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-6 md:px-12 lg:px-24 bg-white"
      aria-labelledby="impact-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block border border-[#293675] text-[#293675] px-4 py-1 rounded-full font-medium mb-4">
            {badge}
          </span>
          <p
            id="impact-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight"
          >
            {headline}{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              {highlight}
            </span>
          </p>
          <p className="mt-4 text-gray-600 text-base md:text-lg">{description}</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 text-black">
          {metrics.map((m, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-bold text-red-700">
                {inView ? (
                  <CountUp end={m.value} duration={2} suffix={m.suffix || ""} />
                ) : (
                  `0${m.suffix || ""}`
                )}
              </h3>
              <p className="mt-2 text-gray-700">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
