/**
 * Sets `data-theme` before first paint so the page never flashes the wrong
 * appearance. A stored choice wins; otherwise we follow the OS.
 *
 * This has to be a blocking inline script in <head> — anything deferred runs
 * after the first paint, which is the flash we are preventing. React logs a
 * dev-mode notice about script tags in components; it is dev-only and the
 * production console is clean.
 */
const script = `(function(){try{
var stored=localStorage.getItem("theme");
var dark=stored?stored==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.setAttribute("data-theme",dark?"dark":"light");
}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
