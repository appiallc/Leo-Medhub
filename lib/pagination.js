export const PAGE_SIZE = 12;

export function parsePageParam(raw) {
  const n = Number.parseInt(typeof raw === "string" ? raw : "", 10);
  if (!Number.isFinite(n) || n < 1) return 1;
  return n;
}

export function paginate(items, pageParam, pageSize = PAGE_SIZE) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(1, pageParam), totalPages);
  const start = (page - 1) * pageSize;
  const slice = items.slice(start, start + pageSize);
  return { slice, total, totalPages, page };
}
