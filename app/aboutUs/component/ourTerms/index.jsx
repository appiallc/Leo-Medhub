"use client";

import { useEffect, useRef, useState } from "react";
import { FiUsers } from "react-icons/fi";

export default function OurTeams() {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-[#293675] px-4 [perspective:1200px]">
      {/* White Card */}
      <div
        ref={cardRef}
        className={`max-w-4xl rounded-2xl bg-white p-8 shadow-2xl transition-all duration-1000 ease-out sm:p-12
          ${
            visible
              ? "opacity-100 scale-100 translate-y-0 rotate-x-0"
              : "opacity-0 scale-75 translate-y-24 rotate-x-12"
          }
        `}
      >
        <div className="grid gap-8 sm:grid-cols-[200px_1fr]">
          {/* Icon */}
          <div className="flex justify-center sm:justify-start">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-blue-700 text-white text-4xl">
        <FiUsers />
      </div>
    </div>
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#293675] sm:text-4xl">
              Our Teams
            </h2>

            <div className="mt-3 h-1 w-16 rounded bg-[#293675]" />

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              We operate globally with a hybrid approach to outsourcing
              and remote healthcare staffing:
            </p>

            <ul className="mt-4 space-y-1 text-gray-600">
              <li>US Based Account Managers and Administrators</li>
              <li>Located in 12 states</li>
              <li>Cebu City, Philippines</li>
              <li>Ahmedabad, Gujarat, India</li>
              <li>Dominican Republic</li>
              <li>Colombia</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
