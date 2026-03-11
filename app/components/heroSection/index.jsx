"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection({
  title,
  description,
  ctaText = "See How It Works",
  imageSrc = "/slider/banner-2.jpg",
  imageAlt = "Hero",
}) {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 pt-6 md:pt-8 pb-8 md:pb-10">
      <div className="relative w-full min-h-[420px] md:min-h-[500px] lg:min-h-[560px] overflow-hidden rounded-2xl md:rounded-3xl max-w-7xl mx-auto">
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full min-h-[420px] md:min-h-[500px] lg:min-h-[560px] flex flex-col items-center justify-center text-center px-6 md:px-10 py-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl">
            {title}
          </h1>
          <p className="mt-5 md:mt-6 text-base md:text-lg lg:text-xl text-white/95 max-w-2xl leading-relaxed">
            {description}
          </p>
          <div className="mt-8 md:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-gray-900 font-semibold text-base md:text-lg shadow-lg hover:bg-gray-100 transition"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
