/**
 * Renders copy wrapped in `**` with the editorial Instrument Serif italic.
 * The strong element preserves the emphasis semantically while the brand font
 * supplies the visual treatment.
 */
export function EmphasizedCopy({
  text,
  accent = false,
}: {
  text: string;
  accent?: boolean;
}) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    const emphasized = part.startsWith("**") && part.endsWith("**");

    return emphasized ? (
      <strong
        key={`${part}-${index}`}
        className={`font-normal italic ${accent ? "text-[1.1em] text-accent" : ""}`}
        style={{ fontFamily: "var(--font-instrument)" }}
      >
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    );
  });
}

/** Metadata should receive the same copy without its lightweight markers. */
export function stripEmphasis(text: string) {
  return text.replaceAll("**", "");
}
