import React from "react";
import { FaShieldAlt, FaChartLine, FaDesktop, FaLock, FaCloud } from "react-icons/fa";

export default function SecuritySection() {
  const cards = [
    {
      title: "Cybersecurity & Threat Prevention",
      description:
        "Ongoing security training, round-the-clock risk surveillance, multi-factor authentication, and dark web monitoring to defend against evolving threats.",
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
    },
    {
      title: "Productivity & Performance Monitoring",
      description:
        "Real-time oversight through activity tracking and performance metrics to ensure consistent focus and operational efficiency.",
      icon: <FaChartLine className="w-6 h-6 text-white" />,
    },
    {
      title: "Endpoint & Workstation Security",
      description:
        "Enterprise-grade antivirus and malware protection on every device to secure workstations and sensitive workflows.",
      icon: <FaDesktop className="w-6 h-6 text-white" />,
    },
    {
      title: "PHI & Compliance Standards",
      description:
        "HIPAA Seal of Compliance from Compliancy Group, LLC demonstrating adherence to industry-leading privacy and data protection requirements.",
      icon: <FaLock className="w-6 h-6 text-white" />,
    },
    {
      title: "Network & Data Integrity",
      description:
        "Leo Medhub’s infrastructure is continuously secured and monitored to protect your data and all associated operations.",
      icon: <FaCloud className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1 border border-[#293675] rounded-full text-[#293675] text-sm mb-4">
          Security & Compliance
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Enterprise-Grade Security{" "}
          <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Built Into Every Layer</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="border border-red-200 rounded-lg p-6 flex flex-col items-start hover:shadow-lg transition duration-300"
          >
            <div className="bg-[#293675] p-3 rounded-lg mb-4">{card.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
