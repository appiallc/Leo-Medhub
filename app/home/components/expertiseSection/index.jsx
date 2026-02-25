"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ExpertiseSection() {
  const router = useRouter();
  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Image */}
          <div className="w-full">
            <Image
              src="/slider/expertise.jpg" // replace with your image path
              alt="Medical Billing Expert"
              width={600}
              height={500}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            
             <span className="inline-block border border-[#293675] text-[#293675] px-4 py-1 rounded-full font-medium mb-4">
            Our Expertise
          </span>

            <p className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 leading-tight">
            Solutions for several{" "}
              <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Specialities and EHRs</span>
            </p>

            <p className="text-gray-600 text-base md:text-lg">
              Expert medical billing and healthcare staffing solutions
              across{" "}
              <span className="text-[#293675] underline">12+ clinical specialties</span>.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-red-600">✔</span>
                <span>Your clinical expertise, extended.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600">✔</span>
                <span>Your standards, workflows, and protocols.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600">✔</span>
                <span>Cost-effective staffing that scales with you.</span>
              </li>
            </ul>

        <button
  className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-full transition"
  onClick={() => router.push('/contact')}
>
  Contact Us
  <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
    →
  </span>
</button>

          </div>
        </div>
      </div>
    </section>
  );
}
