"use client";

const defaultSkills = [
  "Patient scheduling and rescheduling across providers and locations",
  "Pre-visit intake and chart preparation",
  "Medical records management and document retrieval",
  "Insurance verification and basic eligibility coordination",
  "Referral coordination and closed-loop follow-up",
  "Administrative support for reminders, recalls, and outreach",
];

const defaultCopy = {
  badge: "Our Expertise",
  headline: "Virtual assistants built for",
  headlineHighlight: "front-office and care coordination",
  description:
    "Modeled after our broader expertise across specialties and EHRs, your Virtual Healthcare Assistant is trained to support the day-to-day operations that keep your schedule full and patients informed.",
};

export default function ExpertiseSection({
  skills = defaultSkills,
  copy = defaultCopy,
}) {
  const c = copy;
  return (
    <section
      className="w-full py-16 md:py-20 bg-white"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <span className="inline-block border border-[#293675] text-[#293675] px-4 py-1 rounded-full font-medium">
            {c.badge}
          </span>
          <p
            id="expertise-heading"
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight"
          >
            {c.headline}{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              {c.headlineHighlight}
            </span>
          </p>
          <p className="text-gray-600 text-base md:text-lg">{c.description}</p>
        </div>

        <div className="rounded-2xl bg-[#F9FAFB] border border-gray-100 p-6 md:p-8">
          <ul className="space-y-3 text-gray-700 text-sm md:text-base" role="list">
            {skills.map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <span className="text-red-600 mt-0.5" aria-hidden>
                  ✔
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
