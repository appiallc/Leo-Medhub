"use client";

import Image from "next/image";

const logos = [
  // 👇 Add/remove logos here. Put image files in /public/logos and update the src paths.
  { src: "/logos/Allscripts-Logo.webp", alt: "Allscripts Logo" },
  { src: "/logos/logo2.png", alt: "Partner Logo 2" },
  { src: "/logos/logo3.png", alt: "Partner Logo 3" },
  { src: "/logos/logo4.png", alt: "Partner Logo 4" },
  { src: "/logos/logo5.png", alt: "Partner Logo 5" },
];

export default function LogosStrip() {
  const loopedLogos = [...logos, ...logos];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-gray-500">
            Trusted by leading practices
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Soft fade on the left/right edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white via-white/70 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white via-white/70 to-transparent" />

          <div className="logo-marquee flex items-center gap-10">
            {loopedLogos.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex items-center justify-center min-w-[120px] md:min-w-[160px] h-16 md:h-20 grayscale hover:grayscale-0 transition"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

