"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SmartChoiceSection({
  sectionLabel = "Why Choose Us",
  sectionTitle = "The Smart Choice For",
  sectionHighlight,
  cards = [],
  ariaLabel = "Benefit cards carousel",
}) {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const plugins = reducedMotion
    ? []
    : [Autoplay({ delay: 4000, stopOnInteraction: false })];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
      duration: 28,
      dragFree: false,
    },
    plugins
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!cards.length) return null;

  const displayCards =
    cards.length >= 6 ? cards : [...cards, ...cards];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#F8FAFC] overflow-hidden">
      <div className="max-w-[1600px] mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16 px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm"
          >
            {sectionLabel}
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-3 leading-tight">
            {sectionTitle}{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500">
              {sectionHighlight}
            </span>
          </h2>
        </div>

        <div
          className="relative px-4"
          role="region"
          aria-roledescription="carousel"
          aria-label={ariaLabel}
        >
          <div className="absolute inset-y-0 left-0 right-0 pointer-events-none flex items-center justify-between px-2 md:px-4 z-20">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 flex-shrink-0"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" aria-hidden />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="pointer-events-auto w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-center text-slate-700 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" aria-hidden />
            </button>
          </div>

          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
            ref={emblaRef}
            aria-label="Carousel slides"
            style={{ touchAction: "pan-y pinch-zoom" }}
          >
            <div className="flex" role="group" aria-label="Slides">
              {displayCards.map((card, index) => (
                <div
                  key={`${card.id ?? index}-${index}`}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_22%] min-w-0 px-4"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${card.title}, ${(index % cards.length) + 1} of ${cards.length}`}
                >
                  <div className="group relative h-[450px] w-full rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10" />
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 30vw, 22vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-[160px] p-4 sm:p-5 z-20 overflow-hidden flex flex-col">
                      <div className="mb-2 w-12 h-1 flex-shrink-0 bg-blue-500 rounded-full group-hover:w-20 transition-all duration-500" />
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2 overflow-hidden break-words">
                        {card.title}
                      </h3>
                      <p className="text-slate-200 text-sm leading-relaxed line-clamp-3 overflow-hidden flex-1 min-h-0 break-words">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-50/50 rounded-[100%] blur-3xl -z-10" />
      </div>
    </section>
  );
}
