"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/app/components/heroSection";
import ImpactSection from "@/app/components/impactSection";
import SmartChoiceSection from "@/app/components/smartChoiceSection";
import BenefitSection from "@/app/components/benefitSection";
import { serviceContent } from "./serviceContent";

const SuccessStorySectionLazy = dynamic(
  () => import("@/app/components/successStorySection").then((m) => m.default),
  {
    loading: () => (
      <div
        className="w-full py-16 md:py-20 bg-gradient-to-b from-[#F9FAFB] to-white min-h-[360px]"
        aria-hidden
      />
    ),
    ssr: true,
  }
);

const ExpertiseSectionLazy = dynamic(
  () => import("@/app/components/expertiseSection").then((m) => m.default),
  {
    loading: () => (
      <div className="w-full py-16 md:py-20 bg-white min-h-[320px]" aria-hidden />
    ),
    ssr: true,
  }
);

const SecuritySectionLazy = dynamic(
  () => import("@/app/components/securitySection").then((m) => m.default),
  {
    loading: () => (
      <div className="w-full bg-white py-16 md:py-20 min-h-[320px]" aria-hidden />
    ),
    ssr: true,
  }
);

export default function ServicePageLayout({ slug }) {
  const content = serviceContent[slug];
  if (!content) return null;

  const { hero, impact, smartChoice, benefit } = content;

  return (
    <>
      <HeroSection
        title={hero.title}
        description={hero.description}
        ctaText={hero.ctaText}
      />
      <ImpactSection
        headline={impact.headline}
        highlight={impact.highlight}
        description={impact.description}
        metrics={impact.metrics}
      />
      <SmartChoiceSection
        key={slug}
        sectionTitle="The Smart Choice For"
        sectionHighlight={smartChoice.sectionHighlight}
        cards={smartChoice.cards}
        ariaLabel={`Smart choice for ${smartChoice.sectionHighlight} - benefit cards`}
      />
      {benefit && (
        <BenefitSection
          heading={benefit.heading}
          content={benefit.content}
          benefits={benefit.benefits}
        />
      )}
      <SuccessStorySectionLazy />
      <ExpertiseSectionLazy />
      <SecuritySectionLazy />
    </>
  );
}
