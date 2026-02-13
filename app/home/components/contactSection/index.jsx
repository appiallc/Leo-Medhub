"use client";

import { useState } from "react";
import Image from "next/image";
import InputField from "../../../components/InputField";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  interest: "",
  source: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.phone) newErrors.phone = "Phone number is required";
    if (!form.company) newErrors.company = "Company name is required";
    if (!form.message) newErrors.message = "Message is required";
    if (!form.interest) newErrors.interest = "Please select an option";
    if (!form.source) newErrors.source = "Please select an option";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form submitted:", form);
    // API call here
  };

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Image */}
          <div className="w-full h-full">
            <Image
              src="/slider/contact.jpg"
              alt="Support Team"
              width={600}
              height={700}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div>
           
             <span className="inline-block border border-[#293675] text-[#293675] px-4 py-1 rounded-full font-medium mb-4">
             Contact Us
          </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Connect With Us to <span className="bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">Transform Your Practice</span> Today
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="First name"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  error={errors.firstName}
                />
                <InputField
                  label="Last name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  error={errors.lastName}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  error={errors.email}
                />
                <InputField
                  label="Phone number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  error={errors.phone}
                />
                <InputField
                  label="Company name"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  error={errors.company}
                />
              </div>

              <InputField
                label="Message"
                name="message"
                type="textarea"
                value={form.message}
                onChange={handleChange}
                required
                error={errors.message}
                rows={4}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Interested In"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  error={errors.interest}
                  options={["Medical Billing", "Staffing", "EHR Support"]}
                />
                <InputField
                  label="How did you hear about us?"
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                  required
                  error={errors.source}
                  options={["Google", "Referral", "Social Media"]}
                />
              </div>

              <button
                type="submit"
                className="mt-6 px-8 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition"
              >
                Request a Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
