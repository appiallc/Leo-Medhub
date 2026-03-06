"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Popover from "@mui/material/Popover";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Menu as MenuIcon,
  X as CloseIcon,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeMenu, setActiveMenu] = useState("healthcare");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const triggerRef = useRef(null);

  const handleOpen = () => setAnchorEl(triggerRef.current);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);

  const submenuContent = {
    healthcare: [
      "Virtual Healthcare Assistant",
      "Medical Records",
      "New Patient Coordinator",
      "Prior Authorizations",
      "Phone Receptionist",
      "Fax Management",
      "Prescription Coordinator",
      "Referral Management",
    ],
    billing: [
      "Eligibility & Benefits",
      "Credentialing",
      "Medical Coding",
      "Revenue Cycle Management",
      "Remote Medical Biller",
    ],
  };

  const serviceToPath = {
    "Virtual Healthcare Assistant": "/services/virtualHealthcareAssistant",
    "Medical Records": "/services/medicalRecords",
    "New Patient Coordinator": "/services/newPatientCoordinator",
    "Prior Authorizations": "/services/priorAuthorizations",
    "Phone Receptionist": "/services/phoneReceptionist",
    "Fax Management": "/services/faxManagement",
    "Prescription Coordinator": "/services/prescriptionCoordinator",
    "Referral Management": "/services/referralManagement",
    "Eligibility & Benefits": "/services/eligibilityAndBenefits",
    "Credentialing": "/services/credentialing",
    "Medical Coding": "/services/medicalCoding",
    "Revenue Cycle Management": "/services/revenueCycleManagement",
    "Remote Medical Biller": "/services/remoteMedicalBiller",
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-[999]">
      {/* HEADER BAR */}
      <div className="relative mx-auto px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <Image src="/leoMedhubLogo.png" alt="Leo Medhub" width={80} height={10} />
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-8">
          <div
            ref={triggerRef}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
            className="relative"
          >
            <button className="flex items-center space-x-1 font-medium font-sans text-[18px] text-gray-800 hover:text-red-700">
              <span>Services</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* DESKTOP MEGA MENU */}
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              disableRestoreFocus
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              PaperProps={{
                onMouseEnter: handleOpen,
                onMouseLeave: handleClose,
                sx: {
                  width: 800,
                  p: "24px",
                  borderRadius: "12px",
                  mt: 2,
                },
              }}
            >
              <Box sx={{ display: "flex", gap: 4 }}>
                {/* LEFT */}
                <Box
                  sx={{
                    width: "45%",
                    pr: 3,
                    borderRight: "1px solid #eee",
                  }}
                >
                  {["healthcare", "billing"].map((key, i) => (
                    <Box
                      key={key}
                      onMouseEnter={() => setActiveMenu(key)}
                      sx={{
                        p: 2,
                        borderRadius: "8px",
                        cursor: "pointer",
                        backgroundColor:
                          activeMenu === key ? "#FBF1F0" : "transparent",
                        mt: i ? 2 : 0,
                      }}
                    >
                      <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                        {key === "healthcare"
                          ? "Virtual Healthcare Staffing"
                          : "Medical Billing Services"}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", opacity: 0.7 }}>
                        Explore Service →
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* RIGHT */}
                <Box sx={{ width: "55%", display: "flex", gap: 2, pl: 3 }}>
                  {[0, 1].map((col) => (
                    <Box key={col} sx={{ flex: 1 }}>
                      {submenuContent[activeMenu]
                        .slice(
                          col === 0
                            ? 0
                            : Math.ceil(
                                submenuContent[activeMenu].length / 2
                              ),
                          col === 0
                            ? Math.ceil(
                                submenuContent[activeMenu].length / 2
                              )
                            : undefined
                        )
                        .map((item) => (
                          <Box key={item} sx={{ mx: "5px" }}>
                            <Link
                              href={serviceToPath[item] || "#"}
                              className="block text-[15px] text-slate-700 no-underline py-[7px] pl-[10px] rounded-md hover:text-white hover:bg-[#d63227]"
                            >
                              {item}
                            </Link>
                          </Box>
                        ))}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Popover>
          </div>

          <a className="font-medium text-gray-800 text-[18px] hover:text-red-700" href="/aboutUs">
            About Us
          </a>
          <a className="font-medium text-gray-800 text-[18px] hover:text-red-700" href="#">
            Testimonials
          </a>
          <a className="font-medium text-gray-800 text-[18px] hover:text-red-700" href="#">
            Blog
          </a>
        </nav>

        {/* DESKTOP CTA */}
       <a
  href="contact"
  className="group hidden md:inline-block bg-gradient-to-r from-red-600 to-blue-700 text-white px-6 py-2 rounded-full font-medium transition"
>
  Contact us 
  <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
    →
  </span>
</a>


        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? (
            <CloseIcon size={28} color="black" />
          ) : (
            <MenuIcon size={28} color="black"/>
          )}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 space-y-3 z-[998]">
          {["healthcare", "billing"].map((menu) => (
            <div key={menu}>
              <button
                onClick={() =>
                  setOpenSection(openSection === menu ? null : menu)
                }
                className="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
              >
                <span className="capitalize">{menu}</span>
                {openSection === menu ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {openSection === menu && (
                <div className="pl-4 py-2 space-y-1">
                  {submenuContent[menu].map((sub) => (
                    <Link
                      key={sub}
                      href={serviceToPath[sub] || "#"}
                      className="block text-gray-600 py-1 text-[15px]"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a className="block py-2 text-gray-800 font-medium" href="/aboutUs">
            About Us
          </a>
          <a className="block py-2 text-gray-800 font-medium" href="#">
            Testimonials
          </a>
          <a className="block py-2 text-gray-800 font-medium" href="#">
            Blog
          </a>

          <a
            href="/contact"
            className="block bg-red-700 text-white text-center py-2 rounded-full font-medium"
          >
            Contact us →
          </a>
        </div>
      )}
    </header>
  );
}
