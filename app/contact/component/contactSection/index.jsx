"use client";

import { useState } from "react";
import InputField from "../../../components/InputField";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Tooltip } from "@mui/material";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    hearAbout: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
 const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("+17059785045");
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.company) newErrors.company = "Company Name is required";
    if (!formData.interest) newErrors.interest = "This field is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/mrningstr50@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Contact Form Submission",
          _template: "table",
          FullName: formData.fullName,
          Email: formData.email,
          Phone: formData.phone,
          Company: formData.company,
          Interest: formData.interest,
          HearAbout: formData.hearAbout,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Form submitted successfully!");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          interest: "",
          hearAbout: "",
          message: "",
        });
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting form");
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Connect With Us</h2>
          <p className="text-gray-600">
            Whether you are exploring our services or need immediate assistance,
            our team is ready to deliver responsive, practical solutions for your practice.
          </p>

          <div className="space-y-2">
            <p className="text-[#293675]">Email:</p>
          
            <a
  href="mailto:sales@leomedhub.com"
  className="font-semibold cursor-pointer hover:underline [#293675]"
>
  sales@leomedhub.com
</a>
          </div>

          <div className="space-y-2">
            <p className="text-[#293675]">Call:</p>
           <Tooltip
                 title={copied ? "Copied!" : "Click to copy"}
                 arrow
                 placement="top"
               >
                 <p
                   onClick={handleCopy}
                   className="font-semibold cursor-pointer hover:underline inline-block [#293675]"
                 >
                   +1 (705) 978-5045
                 </p>
               </Tooltip>
          </div>

          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#293675] hover:text-[#293675] text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#293675] hover:text-[#293675] text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#293675] hover:text-[#293675] text-2xl">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-[#293675] hover:text-[#293675] text-2xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                error={errors.fullName}
                placeholder="e.g. Mark Tyson"
              />

              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                error={errors.email}
                placeholder="e.g. marktyson46@gmail.com"
              />

              <InputField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                error={errors.phone}
                placeholder="e.g. (401) 555-7896"
              />

              <InputField
                label="Company Name"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                error={errors.company}
                placeholder="e.g. Leo Medhub"
              />

              <InputField
                label="I'm interested in"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                error={errors.interest}
                options={["Medical Billing", "Staffing", "EHR Support"]}
              />

              <InputField
                label="How did you hear about us?"
                name="hearAbout"
                value={formData.hearAbout}
                onChange={handleChange}
                options={["Google", "Referral", "Social Media"]}
              />
            </div>
            <div className="mt-4">
              <InputField
                label="Message"
                name="message"
                type="textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                rows={4}
              />
            </div>

            <div className="md:col-span-2 flex flex-col items-start mt-2">
              {/* <div className="mb-4">[reCAPTCHA here]</div> */}

              <button
                type="submit"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-md transition"
              >
                Submit
                <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
