import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { site } from "@/lib/site";

import { PageIntro } from "@/components/sections/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/motion/reveal";

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
  return { title: dict.nav.contact, description: dict.contact.lead };
}

export default async function ContactPage({
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
        eyebrow={dict.contact.eyebrow}
        title={dict.contact.title}
        lead={dict.contact.lead}
      />

      <section className="container-page grid gap-12 py-20 md:grid-cols-[1.6fr_0.8fr] md:gap-16 md:py-28">
        <Reveal amount={0.1}>
          <ContactForm copy={dict.contact} />
        </Reveal>

        <aside className="flex flex-col gap-10 md:sticky md:top-[calc(var(--header-h)+4rem)] md:self-start">
          <Reveal index={1}>
            <h2 className="type-eyebrow text-fg-muted">
              {dict.contact.directTitle}
            </h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="type-body text-fg transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="type-body text-fg-secondary transition-colors hover:text-fg"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal index={2}>
            <h2 className="type-eyebrow text-fg-muted">
              {dict.contact.officeTitle}
            </h2>
            <address className="mt-4 type-body not-italic text-fg-secondary">
              {site.address.street}
              <br />
              {site.address.city}
            </address>
          </Reveal>

          <Reveal index={3}>
            <h2 className="type-eyebrow text-fg-muted">
              {dict.contact.hoursTitle}
            </h2>
            <p className="mt-4 type-body text-fg-secondary">
              {dict.contact.hours}
            </p>
          </Reveal>

          <Reveal index={4}>
            <h2 className="type-eyebrow text-fg-muted">
              {dict.footer.socialTitle}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {site.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="type-body text-fg-secondary transition-colors hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </aside>
      </section>
    </>
  );
}
