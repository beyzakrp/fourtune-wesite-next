import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { LabClient } from "./lab-client";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/** Internal bench — kept out of search results and out of the site nav. */
export const metadata: Metadata = {
  title: "Motion lab",
  robots: { index: false, follow: false },
};

export default async function LabPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <LabClient />;
}
