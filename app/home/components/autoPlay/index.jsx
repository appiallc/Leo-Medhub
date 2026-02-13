"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AutoHero() {
  // Slider data
  const slides = [
    {
      image: "/slider/banner-1.jpg",
      title1: "Get Expert",
      title2: "Medical Billing",
      title3: "Services",
      desc: "Leo Medhub delivers comprehensive virtual healthcare staffing and medical billing solutions to unlock your practice's full potential.",
    },
    {
      image: "/slider/banner-2.jpg",
      title1: "Get Expert",
      title2: "Virtual Healthcare",
      title3: "Services",
      desc: "Leo Medhub delivers comprehensive virtual healthcare staffing and medical billing solutions to unlock your practice's full potential.",
    },
    {
      image: "/slider/banner-3.jpg",
      title1: "Get Expert",
      title2: "Remote Medical",
      title3: "Services",
      desc: "Leo Medhub delivers comprehensive virtual healthcare staffing and medical billing solutions to unlock your practice's full potential.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[calc(100vh-80px)]  overflow-hidden">

      {/* BG IMAGE */}
      <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
        <Image
          src={slide.image}
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* OverLay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/40 to-black/45"></div>


      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-8 px-6 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl text-[#293675] font-extrabold leading-tight">
          {slide.title1}{" "}
          <span className="text-red-700">{slide.title2}</span>{" "}
          {slide.title3}
        </h1>

        <p className="mt-4 text-lg text-white max-w-xl">
          {slide.desc}
        </p>

        <button className="mt-6 bg-[#293675] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 w-fit shadow-md">
          Schedule a Free Consultation
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
