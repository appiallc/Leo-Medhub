import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SITE_URL } from "@/lib/site";

export default function ShareSection({ title, slug }) {
  const shareUrl = `${SITE_URL}/blog/${slug}`;
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: FaFacebookF,
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: FaXTwitter,
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: FaLinkedinIn,
    },
  ];

  return (
    <section className="mx-auto mt-10 max-w-3xl px-4">
      <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-red-50/40 px-6 py-7 shadow-sm sm:px-8 sm:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d63227]">
              Share
            </p>
            <h2 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
              Share this article
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {shareLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share this article on ${name}`}
                title={`Share on ${name}`}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:bg-[#d63227] hover:text-white hover:shadow-md"
              >
                <Icon className="h-6 w-6" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
