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
        +1 (705) 978-5045
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
                <li><Link href="#" className="hover:underline">Medical Billing Services</Link></li>
                <li><Link href="#" className="hover:underline">Credentialing</Link></li>
                <li><Link href="#" className="hover:underline">Eligibility & Benefits</Link></li>
                <li><Link href="#" className="hover:underline">Fax Management</Link></li>
                <li><Link href="#" className="hover:underline">Medical Biller</Link></li>
                <li><Link href="#" className="hover:underline">Medical Coding</Link></li>
                <li><Link href="#" className="hover:underline">Medical Records</Link></li>
                <li><Link href="#" className="hover:underline">Virtual Healthcare Assistant</Link></li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">New Patient Coordinator</Link></li>
                <li><Link href="#" className="hover:underline">Phone Receptionist</Link></li>
                <li><Link href="#" className="hover:underline">Prescription Coordinator</Link></li>
                <li><Link href="#" className="hover:underline">Prior Authorizations</Link></li>
                <li><Link href="#" className="hover:underline">Referral Management</Link></li>
                <li><Link href="#" className="hover:underline">Revenue Cycle Management</Link></li>
                <li><Link href="#" className="hover:underline">Virtual Healthcare Staffing</Link></li>
              </ul>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/aboutUs" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:underline">
                  Testimonials
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
      </div>
    </footer>
  );
}
