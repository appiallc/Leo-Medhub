"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Script from "next/script";
import InputField from "../../../components/InputField";

const FORMSUBMIT_EMAIL = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || "";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

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
  const router = useRouter();
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const captchaContainerRef = useRef(null);
  const captchaWidgetIdRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
    setSubmitError("");
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

  const resetCaptcha = () => {
    if (
      typeof window !== "undefined" &&
      window.grecaptcha &&
      captchaWidgetIdRef.current !== null
    ) {
      window.grecaptcha.reset(captchaWidgetIdRef.current);
    }
  };

  const initializeRecaptcha = useCallback(() => {
    if (
      !recaptchaSiteKey ||
      typeof window === "undefined" ||
      captchaContainerRef.current === null ||
      captchaWidgetIdRef.current !== null
    ) {
      return;
    }

    const grecaptcha = window.grecaptcha;

    if (!grecaptcha || typeof grecaptcha.ready !== "function") {
      return;
    }

    grecaptcha.ready(() => {
      if (
        captchaContainerRef.current === null ||
        captchaWidgetIdRef.current !== null ||
        typeof grecaptcha.render !== "function"
      ) {
        return;
      }

      captchaWidgetIdRef.current = grecaptcha.render(captchaContainerRef.current, {
        sitekey: recaptchaSiteKey,
        callback: (token) => {
          setRecaptchaToken(token);
          setSubmitError("");
        },
        "expired-callback": () => {
          setRecaptchaToken("");
          setSubmitError("reCAPTCHA expired. Please try again.");
        },
        "error-callback": () => {
          setRecaptchaToken("");
          setSubmitError("reCAPTCHA could not be verified. Please try again.");
        },
      });
    });
  }, [recaptchaSiteKey]);

  useEffect(() => {
    initializeRecaptcha();
  }, [initializeRecaptcha]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (!FORMSUBMIT_EMAIL) {
      setSubmitError("Contact form destination is not configured yet.");
      return;
    }

    if (!recaptchaSiteKey) {
      setSubmitError("reCAPTCHA is not configured yet.");
      return;
    }

    if (typeof window === "undefined" || !window.grecaptcha || captchaWidgetIdRef.current === null) {
      setSubmitError("reCAPTCHA is still loading. Please try again.");
      return;
    }

    if (!recaptchaToken) {
      setSubmitError("Please confirm you are not a robot.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "New Contact Form Submission",
          _template: "table",
          _captcha: "false",
          FullName: `${form.firstName} ${form.lastName}`.trim(),
          Email: form.email,
          Phone: form.phone,
          Company: form.company,
          Interest: form.interest,
          HearAbout: form.source,
          Message: form.message,
        }),
      });

      if (response.ok) {
        setForm(initialForm);
        setErrors({});
        router.push("/thank-you");
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
      setRecaptchaToken("");
      resetCaptcha();
    }
  };

  return (
    <section className="py-12 md:py-20">
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={initializeRecaptcha}
      />

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
                disabled={isSubmitting}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Request a Consultation"}
              </button>

              <div className="mt-4">
                <div ref={captchaContainerRef} />
                {submitError ? (
                  <p className="mt-3 text-sm text-red-600">{submitError}</p>
                ) : null}
                <p className="mt-3 text-xs text-gray-500">
                  Complete the reCAPTCHA checkbox before submitting.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
