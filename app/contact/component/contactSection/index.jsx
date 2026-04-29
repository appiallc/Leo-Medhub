"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import InputField from "../../../components/InputField";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const FORMSUBMIT_EMAIL = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || "";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export default function ContactSection() {
  const router = useRouter();
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const captchaContainerRef = useRef(null);
  const captchaWidgetIdRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("+17059785045");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setSubmitError("");
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.company.trim()) newErrors.company = "Company Name is required";
    if (!formData.interest) newErrors.interest = "This field is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
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

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

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
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          interest: "",
          hearAbout: "",
          message: "",
        });
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
    <section className="bg-gray-50 py-16 px-6">
      <Script
        src="https://www.google.com/recaptcha/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={initializeRecaptcha}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Connect With Us</h2>
          <p className="text-gray-600">
            Whether you are exploring our services or need immediate assistance, our team
            is ready to deliver responsive, practical solutions for your practice.
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
            <Tooltip title={copied ? "Copied!" : "Click to copy"} arrow placement="top">
              <p
                onClick={handleCopy}
                className="font-semibold cursor-pointer hover:underline inline-block [#293675]"
              >
                +1 (205) 319-9760
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
                required
                error={errors.message}
                placeholder="Type your message here"
                rows={4}
              />
            </div>

            <div className="md:col-span-2 flex flex-col items-start mt-2">
              <div ref={captchaContainerRef} />

              {submitError ? (
                <p className="mt-3 text-sm text-red-600">{submitError}</p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-blue-700 text-white rounded-md transition disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
                <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  {"->"}
                </span>
              </button>

              <p className="mt-3 text-xs text-gray-500">
                Complete the reCAPTCHA checkbox before submitting.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
