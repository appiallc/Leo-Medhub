import { ChevronDown } from "lucide-react";

export default function PostFaqs({ faqs }) {
  if (!faqs?.length) return null;

  return (
    <section className="mx-auto mt-16 max-w-3xl px-4">
      <div className="rounded-3xl border border-gray-100 bg-gray-50/80 p-6 shadow-sm sm:p-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d63227]">
            FAQs
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq._key ?? `${faq.question}-${index}`}
              className="group rounded-2xl border border-gray-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900 marker:content-none">
                <span>{faq.question}</span>
                <ChevronDown
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-[#d63227] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
