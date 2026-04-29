import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * @param {{
 *   currentPage: number;
 *   totalPages: number;
 *   basePath: string;
 *   hash?: string;
 * }} props
 */
export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  hash = "",
}) {
  if (totalPages <= 1) return null;

  const suffix = hash ? `#${hash.replace(/^#/, "")}` : "";

  const href = (page) => {
    const q = page <= 1 ? "" : `?page=${page}`;
    return `${basePath}${q}${suffix}`;
  };

  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const showNumbers = totalPages <= 7;
  const pageNumbers = showNumbers
    ? Array.from({ length: totalPages }, (_, i) => i + 1)
    : [];

  return (
    <nav
      className="mt-14 flex flex-col items-center gap-4 border-t border-gray-100 pt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
      aria-label="Pagination"
    >
      <p className="order-2 text-sm text-gray-600 sm:order-1">
        Page <span className="font-semibold text-gray-900">{currentPage}</span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900">{totalPages}</span>
      </p>

      <div className="order-1 flex flex-wrap items-center justify-center gap-2 sm:order-2">
        {canPrev ? (
          <Link
            href={href(prevPage)}
            className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-[#d63227]/30 hover:bg-red-50 hover:text-[#d63227]"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Previous
          </Link>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-1 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-400">
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Previous
          </span>
        )}

        {showNumbers ? (
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {pageNumbers.map((n) => (
              <li key={n}>
                {n === currentPage ? (
                  <span
                    className="inline-flex min-w-[2.25rem] justify-center rounded-lg bg-[#d63227] px-3 py-2 text-sm font-semibold text-white"
                    aria-current="page"
                  >
                    {n}
                  </span>
                ) : (
                  <Link
                    href={href(n)}
                    className="inline-flex min-w-[2.25rem] justify-center rounded-lg border border-transparent px-3 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-200 hover:bg-gray-50"
                  >
                    {n}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        ) : null}

        {canNext ? (
          <Link
            href={href(nextPage)}
            className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-[#d63227]/30 hover:bg-red-50 hover:text-[#d63227]"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden />
          </Link>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-1 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-400">
            Next
            <ChevronRight className="h-4 w-4" aria-hidden />
          </span>
        )}
      </div>
    </nav>
  );
}
