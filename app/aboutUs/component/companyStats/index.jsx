"use client";

import { FaCheck } from "react-icons/fa";

export default function CompanyStats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-gray-700">
              Current Stats as Q4 2025
            </h3>

            <ul className="space-y-4">
              {[
                "Over 500 Healthcare practices in 44 states",
                "Over 60 specialties",
                "Over 60 EHR Software systems experience"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-600 text-white">
                    <FaCheck size={12} />
                  </span>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-gray-700">
              Part of the Meditab Family of Companies
            </h3>

            <ul className="space-y-4">
              {[
                "Started in 1997 by pharmacists, doctors and healthcare leaders",
                "7 Software systems from EHR’s, Pharmacy software, IPA software and pharmaceutical robotics",
                "Serving over 6,000 providers",
                "30 companies in healthcare including multispecialty clinics, pharmacies, IPA’s and much more!"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-red-600 text-white">
                    <FaCheck size={12} />
                  </span>
                  <p className="text-gray-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
