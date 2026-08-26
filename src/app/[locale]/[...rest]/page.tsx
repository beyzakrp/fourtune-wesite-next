import { notFound } from "next/navigation";

/**
 * Catch-all inside the locale segment.
 *
 * Without it, an unknown path falls through to Next's bare 404 — which sits
 * outside `[locale]/layout.tsx` and so renders with no header, footer or
 * theme. Calling `notFound()` from in here puts the miss inside the layout,
 * where `[locale]/not-found.tsx` can answer it properly.
 */
export default function CatchAll(): never {
  notFound();
}
