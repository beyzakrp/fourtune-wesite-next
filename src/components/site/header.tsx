"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n/config";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";
import { useScrolled } from "./use-scrolled";

export type HeaderCopy = {
  nav: { href: string; label: string }[];
  startProject: string;
  menu: string;
  close: string;
  language: string;
  theme: string;
  skipToContent: string;
};

/**
 * A transparent header that rides inside the opening band.
 *
 * There is no chrome of its own — no pill, no border, no material — because
 * every page opens with a dark band and the header is simply type laid on it.
 * The backing plate only fades in once that band has scrolled past, which is
 * the one moment white type would otherwise land on a white page.
 *
 * The row is three columns so the brand sits on the true centre line of the
 * viewport rather than in the leftover space between the nav and the actions.
 */
export function Header({ locale, copy }: { locale: Locale; copy: HeaderCopy }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useScrolled<HTMLElement>(50);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const home = `/${locale}`;
  const menuId = "site-menu";

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-6 focus-visible:top-6 focus-visible:z-70 focus-visible:rounded-full focus-visible:bg-accent-solid focus-visible:px-4 focus-visible:py-2 focus-visible:text-onaccent"
      >
        {copy.skipToContent}
      </a>

      <header ref={headerRef} data-scrolled="false" className="sh-root">
        <div className="sh-grid">
          <div className="flex justify-self-start">
            <Link href={home} aria-label={site.name} className="flex items-center">
              <Wordmark name={site.name} className="h-5 sm:h-6" />
            </Link>
          </div>

          {/* The full set, not a slice — the centre column is the navigation,
              so leaving half of it out would make the menu button the only way
              to reach two of four sections on desktop. */}
          <nav
            aria-label={copy.menu}
            className="hidden items-center gap-8 justify-self-center lg:flex"
          >
            {copy.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="sh-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4 justify-self-end sm:gap-5">
            <div className="sh-controls hidden items-center gap-3 md:flex">
              <LocaleSwitcher current={locale} label={copy.language} />
              <ThemeToggle label={copy.theme} />
            </div>

            <Link
              href={`${home}/contact`}
              className="hidden uppercase tracking-[0.1em] hover:underline sm:inline-block"
            >
              {copy.startProject}
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={copy.menu}
              aria-expanded={menuOpen}
              aria-controls={menuId}
              /* Hidden exactly where the nav appears. The two are complements:
                 below `lg` the links are collapsed and the burger is the only
                 way in; at `lg` and up the links are on screen and a burger
                 beside them would be a second door to the same room. */
              className="sh-burger grid size-10 shrink-0 place-content-center gap-[5px] rounded-full bg-[rgb(255_255_255/0.15)] backdrop-blur-md transition-colors hover:bg-[rgb(255_255_255/0.25)] lg:hidden"
            >
              <span aria-hidden className="block h-px w-4 bg-current" />
              <span aria-hidden className="block h-px w-4 bg-current" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        id={menuId}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        closeLabel={copy.close}
        label={copy.menu}
        items={copy.nav}
        activeHref={copy.nav.find((item) => isActive(item.href))?.href}
        returnFocusRef={menuButtonRef}
        footer={
          <div className="flex items-center justify-between gap-3">
            <LocaleSwitcher current={locale} label={copy.language} />
            <ThemeToggle label={copy.theme} />
          </div>
        }
      />
    </>
  );
}
