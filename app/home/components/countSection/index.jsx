"use client";

import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";

export default function ImpactSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);       // start animation
        } else {
          setInView(false);      // reset when out of view
        }
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
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <span className="inline-block border border-[#293675] text-[#293675] px-4 py-1 rounded-full font-medium mb-4">
            Our Impact
          </span>

          <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Trusted by <br />
            Healthcare <br />
            Leaders Nationwide
          </p>
        </div>

        {/* RIGHT GRID */}
        <div className="grid sm:grid-cols-2 gap-10 text-black">
          <div>
            <h3 className="text-6xl font-bold text-red-700">
              {inView ? <CountUp end={2300} duration={2} /> : "0"}+
            </h3>
            <p className="mt-2">
              <span className="font-semibold">Healthcare providers</span> rely on our
              integrated virtual staffing and medical billing solutions.
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-red-700">
              {inView ? <CountUp end={1400} duration={2} /> : "0"}+
            </h3>
            <p className="mt-2">
              <span className="font-semibold">Dedicated professionals</span> delivering
              operational excellence and enhanced efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-red-700">
              {inView ? <CountUp end={40} duration={2} /> : "0"}+
            </h3>
            <p className="mt-2">
              <span className="font-semibold">U.S. states</span> where practices
              benefit from our proven solutions.
            </p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-red-700">
              {inView ? <CountUp end={60} duration={2} /> : "0"}+
            </h3>
            <p className="mt-2">
              <span className="font-semibold">EHR and PM systems</span> supported
              with certified expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
