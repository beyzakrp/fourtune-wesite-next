import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/get-dictionary";
import { navItems, site } from "@/lib/site";
import styles from "./footer.module.css";

const legalCopy: Record<Locale, { privacy: string; terms: string }> = {
  tr: { privacy: "Gizlilik", terms: "Koşullar" },
  en: { privacy: "Privacy", terms: "Terms" },
  de: { privacy: "Datenschutz", terms: "Bedingungen" },
  fr: { privacy: "Confidentialité", terms: "Conditions" },
};

export function Footer({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const year = new Date().getFullYear();
  const footerNav = navItems.filter((item) => item.key !== "home");

  return (
    <footer className={`band mt-3 ${styles.footer}`}>
      <div className={styles.content}>
        <nav aria-label={dict.footer.navTitle}>
          <ul className={styles.navigation}>
            {footerNav.map((item) => (
              <li key={item.key}>
                <Link href={`/${locale}${item.href}`}>{dict.nav[item.key]}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.details}>
          <nav className={styles.legal} aria-label={dict.footer.contactTitle}>
            <Link href={`/${locale}/privacy`}>{legalCopy[locale].privacy}</Link>
            <Link href={`/${locale}/terms`}>{legalCopy[locale].terms}</Link>
          </nav>

          <ul className={styles.socials} aria-label={dict.footer.socialTitle}>
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={item.label}
                >
                  <Image
                    src={item.icon}
                    alt=""
                    aria-hidden
                    width={24}
                    height={24}
                    unoptimized
                  />
                </a>
              </li>
            ))}
          </ul>

          <address className={styles.address}>
            {site.address.street}
            <br />
            {site.address.city}, {site.address.country}
          </address>

          <div className={styles.contact}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`https://${site.domain}`}>www.{site.domain}</a>
          </div>

          <p className={styles.copyright}>
            © {year} <strong>{site.short}</strong> Agency. {dict.footer.rights}
          </p>
        </div>
      </div>

      <Link
        href={`/${locale}`}
        className={styles.wordmark}
        aria-label={`${site.name} — ${dict.nav.home}`}
      >
        <Image
          src="/brand/logo/logo-footer.svg"
          alt=""
          aria-hidden
          width={600}
          height={98}
          unoptimized
        />
      </Link>
    </footer>
  );
}
