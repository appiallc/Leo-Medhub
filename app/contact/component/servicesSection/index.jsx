"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

const servicesData = {
  billing: {
    title: "Medical Billing Services",
    description:
      "Our specialized team handles claims, coding, and collections to ensure timely reimbursement for your practice.",
    image: "/slider/MedicalBillingServices.jpg", // replace with your image path
    items: [
      "Eligibility and Benefits Verification",
      "Revenue Cycle Management",
      "Medical Billing",
      "Medical Coding",
      "Credentialing",
    ],
  },
  clinical: {
    title: "Comprehensive Clinical Tasks",
    description:
      "We manage authorizations, referrals, and administrative tasks so your clinical team can focus on patient care.",
    image: "/slider/ComprehensiveClinicalTasks.jpg",
    items: [
      "Prior Authorizations",
      "Referral Processing",
      "Prescription Coordinator",
      "Live Scribe And Transcription Services",
    ],
  },
  frontOffice: {
    title: "Front Office Solutions",
    description:
      "A dedicated team focused entirely on your practice to ensure seamless front office operations every day.",
    image: "/slider/FrontOfficeSolutions.jpg",
    items: [
      "Phone Receptionist",
      "Medical Records",
      "New Patient Coordinator",
      "Fax Management",
    ],
  },
};

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("billing");

  const service = servicesData[activeTab];

  const serviceLinkMap = {
    "Eligibility and Benefits Verification": "/services/eligibilityAndBenefits",
    "Revenue Cycle Management": "/services/revenueCycleManagement",
    "Medical Billing": "/services/remoteMedicalBiller",
    "Medical Coding": "/services/medicalCoding",
    Credentialing: "/services/credentialing",
    "Prior Authorizations": "/services/priorAuthorizations",
    "Referral Processing": "/services/referralManagement",
    "Prescription Coordinator": "/services/prescriptionCoordinator",
    "Phone Receptionist": "/services/phoneReceptionist",
    "Medical Records": "/services/medicalRecords",
    "New Patient Coordinator": "/services/newPatientCoordinator",
    "Fax Management": "/services/faxManagement",
    "Live Scribe And Transcription Services": "/services/virtualHealthcareAssistant",
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Explore Leo Medhub's <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Comprehensive Service Portfolio</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Learn how Leo Medhub can elevate your practice with integrated billing solutions, healthcare staffing, credentialing services, and more.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.keys(servicesData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2 rounded-md border ${
                activeTab === key
                  ? "bg-red-100 border-red-500 text-red-700"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
            >
              {key === "billing"
                ? "Billing"
                : key === "clinical"
                ? "Clinical"
                : "Front Office"}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="w-full h-100">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-white p-6 lg:h-100 rounded-lg shadow-md">
  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
  <p className="text-gray-600 mb-4">{service.description}</p>

  <ul className="divide-y divide-gray-200">
    {service.items.map((item) => {
      const href = serviceLinkMap[item];
      const content = (
        <>
          <span>{item}</span>
          <HiArrowRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={20}
          />
        </>
      );

      return (
        <li
          key={item}
          className="group flex justify-between items-center py-3 text-gray-800 hover:text-red-600 transition"
        >
          {href ? (
            <Link href={href} className="flex-1 flex justify-between items-center gap-2">
              {content}
            </Link>
          ) : (
            content
          )}
        </li>
      );
    })}
  </ul>
</div>

        </div>
      </div>
    </section>
  );
}
