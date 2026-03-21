export const metadata = {
  title: "Privacy Policy | Leo Medhub",
  description:
    "How Leo Medhub collects, uses, and protects personal information in connection with our virtual healthcare and billing services.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-14 md:py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-[#293675] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 21, 2026</p>

        <div className="space-y-8 text-gray-700 text-[15px] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p>
              Leo Medhub (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
              This Privacy Policy describes how we collect, use, disclose, and safeguard information
              when you visit our website or engage our services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">2. Information we collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact and business information</strong> you provide (for example, name,
                email, phone, organization) when you inquire about or use our services.
              </li>
              <li>
                <strong>Technical data</strong> such as IP address, browser type, and pages visited,
                collected through cookies or similar technologies where applicable.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">3. How we use information</h2>
            <p>We use information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and provide our services</li>
              <li>Operate, maintain, and improve our website and operations</li>
              <li>Comply with legal obligations and protect our rights</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">4. Healthcare and client data</h2>
            <p>
              Where we process protected health information (PHI) or other regulated data on behalf
              of clients, handling is governed by applicable laws (such as HIPAA, where applicable)
              and the agreements between Leo Medhub and the client. This policy supplements—not
              replaces—those obligations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">5. Sharing of information</h2>
            <p>
              We do not sell your personal information. We may share information with service
              providers who assist our operations (under confidentiality terms), when required by
              law, or to protect the safety and rights of Leo Medhub and others.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">6. Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to
              protect information. No method of transmission over the internet is completely secure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">7. Your choices</h2>
            <p>
              Depending on your location, you may have rights to access, correct, or delete certain
              personal information, or to object to certain processing. Contact us using the details
              below to make a request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">8. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post the revised policy
              on this page and update the &quot;Last updated&quot; date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">9. Contact us</h2>
            <p>
              Questions about this Privacy Policy:{" "}
              <a
                href="mailto:sales@leomedhub.com"
                className="text-[#d63227] hover:underline font-medium"
              >
                sales@leomedhub.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
