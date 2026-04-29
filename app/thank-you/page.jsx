"use client";

import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50">
      <section className="w-full max-w-2xl rounded-2xl bg-white shadow-md p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Thank you for contacting us!
        </h1>
        <p className="mt-4 text-gray-600">
          We have received your message and will get back to you soon.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-gradient-to-r from-red-600 to-blue-700 hover:opacity-90 transition"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
