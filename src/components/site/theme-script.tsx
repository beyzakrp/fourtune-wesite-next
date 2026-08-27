"use client";

import { useLayoutEffect } from "react";
import { useServerInsertedHTML } from "next/navigation";

/**
 * Sets `data-theme` before first paint so the page never flashes the wrong
 * appearance. A stored choice wins; otherwise we follow the OS.
 *
 * `useServerInsertedHTML` puts the inline script only in the initial server
 * stream. This component renders no script on the client, avoiding React's
 * warning about dynamically inserted script tags during locale navigation.
 */
const themeScript = `(function(){try{
var stored=localStorage.getItem("theme");
var dark=stored?stored==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.setAttribute("data-theme",dark?"dark":"light");
}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem("theme");
    const dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  } catch {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      id="theme-initializer"
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  ));

  // React Strict Mode can reset <html> attributes during its development
  // remount. Re-applying here is a no-op in normal production hydration.
  useLayoutEffect(applyStoredTheme, []);

  return null;
}
