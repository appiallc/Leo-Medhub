"use client";

import { FaShieldAlt, FaLock, FaCloud } from "react-icons/fa";

const defaultCards = [
  {
    title: "HIPAA-aligned operations",
    description:
      "Assistants are trained on HIPAA-conscious workflows, privacy standards, and secure communication practices for PHI.",
    icon: <FaShieldAlt className="w-6 h-6 text-white" />,
  },
  {
    title: "Secure systems & access",
    description:
      "Least-privilege access, strong authentication, and usage within your approved EMR and communication tools.",
    icon: <FaLock className="w-6 h-6 text-white" />,
  },
  {
    title: "Protected data & monitoring",
    description:
      "Continuously monitored infrastructure and policies to safeguard patient data and maintain audit-ready records.",
    icon: <FaCloud className="w-6 h-6 text-white" />,
  },
];

const defaultCopy = {
  badge: "Security & Compliance",
  headline: "HIPAA-conscious",
  headlineHighlight: "virtual assistant support",
  description:
    "Virtual Healthcare Assistants operate within your security requirements—supporting your practice while helping protect systems, data, and every patient interaction.",
};

export default function SecuritySection({
  cards = defaultCards,
  copy = defaultCopy,
}) {
  const c = copy;
  return (
    <section
      className="w-full bg-white py-16 md:py-20"
      aria-labelledby="security-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 border border-[#293675] rounded-full text-[#293675] text-sm mb-4">
            {c.badge}
          </span>
          <h2
            id="security-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            {c.headline}{" "}
            <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              {c.headlineHighlight}
            </span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            {c.description}
          </p>
        </div>

        <div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-3"
          aria-label="Security and compliance features"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="border border-red-200 rounded-lg p-6 flex flex-col items-start hover:shadow-lg transition duration-300 bg-white"
            >
              <div className="bg-[#293675] p-3 rounded-lg mb-4" aria-hidden>
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
