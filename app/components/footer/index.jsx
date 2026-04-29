"use client";

import Image from "next/image";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

export default function Footer() {
   const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+17059785045");
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <footer className="bg-[#293675] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Contact */}
          <div className="space-y-4">
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center cursor-pointer"
             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Image
                src="/leoMedhubLogo.jpg" // replace
                alt="Leo Medhub"
                width={60}
                height={60}
              />
            </div>

          <Tooltip
      title={copied ? "Copied!" : "Click to copy"}
      arrow
      placement="top"
    >
      <p
        onClick={handleCopy}
        className="text-sm cursor-pointer hover:underline inline-block"
      >
        +1 (205) 319-9760
      </p>
    </Tooltip>
    <div>
          <a
  href="mailto:sales@leomedhub.com"
  className="text-sm cursor-pointer hover:underline"
>
  sales@leomedhub.com
</a>
</div>

          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
            <ul className="space-y-2 text-sm">
              <li>
                  <Link href="/services/credentialing" className="hover:underline">
                    Credentialing
                  </Link>
                </li>
                <li>
                  <Link href="/services/eligibilityAndBenefits" className="hover:underline">
                    Eligibility & Benefits
                  </Link>
                </li>
                <li>
                  <Link href="/services/faxManagement" className="hover:underline">
                    Fax Management
                  </Link>
                </li>
                <li>
                  <Link href="/services/remoteMedicalBiller" className="hover:underline">
                    Remote Medical Biller
                  </Link>
                </li>
                <li>
                  <Link href="/services/medicalCoding" className="hover:underline">
                    Medical Coding
                  </Link>
                </li>
                <li>
                  <Link href="/services/medicalRecords" className="hover:underline">
                    Medical Records
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/virtualHealthcareAssistant"
                    className="hover:underline"
                  >
                    Virtual Healthcare Assistant
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/services/newPatientCoordinator" className="hover:underline">
                    New Patient Coordinator
                  </Link>
                </li>
                <li>
                  <Link href="/services/phoneReceptionist" className="hover:underline">
                    Phone Receptionist
                  </Link>
                </li>
                <li>
                  <Link href="/services/prescriptionCoordinator" className="hover:underline">
                    Prescription Coordinator
                  </Link>
                </li>
                <li>
                  <Link href="/services/priorAuthorizations" className="hover:underline">
                    Prior Authorizations
                  </Link>
                </li>
                <li>
                  <Link href="/services/referralManagement" className="hover:underline">
                    Referral Management
                  </Link>
                </li>
                <li>
                  <Link href="/services/revenueCycleManagement" className="hover:underline">
                    Revenue Cycle Management
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:underline">
                    Virtual Healthcare Staffing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
                <li>
                <Link href="/#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:underline">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-center text-sm text-white/85">
          <p className="text-center sm:text-left">© 2026 Leo Medhub. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/terms" className="hover:text-white hover:underline">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
