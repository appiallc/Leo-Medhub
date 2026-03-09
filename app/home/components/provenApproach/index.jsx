"use client";

import Image from "next/image";
import { Handshake, User, Star, MessageSquare } from "lucide-react";

export default function ProvenApproach() {
  return (
    <section 
    id="why-us"
    className="w-full px-6 md:px-12 lg:px-24 py-16 bg-white">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <span className="inline-block border border-[#293675] text-[#293675]  px-4 py-1 rounded-full font-medium mb-4">
          Why Us?
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Building Success <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">with Our</span>
          <br />
          Proven Approach
        </h2>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
        {/* LEFT IMAGE BOX */}
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[660px] overflow-hidden rounded-3xl">
          <Image
            src="/slider/partnership.jpg"
            alt="Partnership"
            fill
            className="object-cover"
          />

          {/* Overlay + text */}
          <div className="absolute bottom-6 left-6 text-gray-900 bg-white/85 backdrop-blur-sm rounded-xl p-4 max-w-md">
            <Handshake className="w-12 h-12 mb-3 text-[#293675]" />
            <h3 className="text-2xl font-semibold">Partnership</h3>
            <p className="max-w-md mt-1 text-sm text-gray-700">
              Strategic, cost-effective partnerships designed to drive stability
              and sustainable growth for your practice.
            </p>
          </div>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="flex flex-col gap-6">
          {/* CARD 1 */}
          <div className="bg-red-50 p-8 rounded-3xl">
            <User className="w-10 h-10 text-red-700 mb-3" />
            <h3 className="text-2xl font-semibold text-red-700">Accountability</h3>
            <p className="mt-2 text-gray-700">
              Our team maintains full transparency and accountability across
              every tier, with multiple layers of dedicated supervision.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-red-50 p-8 rounded-3xl">
            <Star className="w-10 h-10 text-red-700 mb-3" />
            <h3 className="text-2xl font-semibold text-red-700">Expertise</h3>
            <p className="mt-2 text-gray-700">
              Leo Medhub brings over years of industry expertise, providing
              trusted support to 15+ healthcare providers in several speciality across EHR and practice management systems.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-red-50 p-8 rounded-3xl">
            <MessageSquare className="w-10 h-10 text-red-700 mb-3" />
            <h3 className="text-2xl font-semibold text-red-700">Communication</h3>
            <p className="mt-2 text-gray-700">
              Leo Medhub fosters seamless collaboration through detailed
              productivity reports, scheduled check-ins, and transparent communication channels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
