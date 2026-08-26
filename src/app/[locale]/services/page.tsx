import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

import { PageIntro } from "@/components/sections/section-heading";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);
  return { title: dict.nav.services, description: dict.services.lead };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow={dict.services.eyebrow}
        title={dict.services.title}
        lead={dict.services.lead}
      />

      <section className="container-page py-20 md:py-28">
        <Services
          items={dict.services.items}
          deliverablesLabel={dict.services.deliverablesLabel}
        />
      </section>

      <div className="border-t border-line">
        <Process
          eyebrow={dict.process.eyebrow}
          title={dict.process.title}
          lead={dict.process.lead}
          steps={dict.process.steps}
        />
      </div>

    </>
  );
}
