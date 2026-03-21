export const metadata = {
  title: "Terms and Conditions | Leo Medhub",
  description:
    "Terms and conditions for using Leo Medhub virtual healthcare staffing and medical billing services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#293675] mb-2">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 21, 2026</p>

        <div className="space-y-8 text-gray-700 text-[15px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">1. Agreement</h2>
            <p>
              By accessing or using the website and services of Leo Medhub (&quot;Leo Medhub,&quot;
              &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to these Terms and
              Conditions. If you do not agree, please do not use our site or services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">2. Services</h2>
            <p>
              Leo Medhub provides virtual healthcare staffing, medical billing, and related
              administrative support. Specific scope, fees, and obligations are defined in a separate
              written agreement or statement of work between you and Leo Medhub.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">3. Use of the website</h2>
            <p>
              You agree to use this website only for lawful purposes. You may not misuse the site,
              attempt unauthorized access to our systems, or interfere with the proper working of the
              service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">4. Intellectual property</h2>
            <p>
              Content on this website (including text, graphics, logos, and design) is owned by Leo
              Medhub or its licensors and is protected by applicable intellectual property laws.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">5. Disclaimer</h2>
            <p>
              Information on this website is provided for general informational purposes. It does not
              constitute medical, legal, or professional advice. We strive for accuracy but do not
              warrant that all content is complete or up to date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">6. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, Leo Medhub shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of this website or
              our services, except where prohibited by law.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">7. Changes</h2>
            <p>
              We may update these Terms from time to time. The &quot;Last updated&quot; date will
              change when we do. Continued use of the site after changes constitutes acceptance of
              the revised Terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">8. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:sales@leomedhub.com"
                className="text-[#d63227] hover:underline font-medium"
              >
                sales@leomedhub.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
