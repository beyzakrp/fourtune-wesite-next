"use client";

import { useState } from "react";
import { AdaptiveRoot } from "@/components/motion/adaptive-root";
import { GhostHeading } from "@/components/motion/ghost-heading";
import { GlassCarousel, type GlassSlide } from "@/components/ui/glass-carousel";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { brandColors } from "@/lib/site";

const SLIDES: GlassSlide[] = [
  {
    id: "identity",
    palette: [brandColors.fortunePink, brandColors.softBlush, "#1c0a1c"],
    mark: "ID",
    eyebrow: "Kimlik",
    title: "Marka sistemleri",
    cta: "Örnekleri gör",
    href: "#work",
  },
  {
    id: "product",
    palette: [brandColors.fusionBlue, brandColors.fortunePink, "#080d1f"],
    mark: "PR",
    eyebrow: "Ürün",
    title: "Arayüz tasarımı",
    cta: "Vakayı oku",
    href: "#work",
  },
  {
    id: "motion",
    palette: [brandColors.midnightInk, brandColors.fusionBlue, "#050916"],
    mark: "MO",
    eyebrow: "Hareket",
    title: "Sistem animasyonu",
    cta: "İzle",
    href: "#work",
  },
];

const GHOST_SETS: [string, string, string, string][] = [
  ["Marka", "Ürün", "Hareket", "Sistem"],
  ["Strateji", "Kimlik", "Zanaat", "Lansman"],
  ["Frekans", "Ton", "Ritim", "Denge"],
];

/**
 * An internal preview bench for the four mechanics ported from the Baseline
 * reference. Nothing here ships to a public route — it exists so the direction
 * can be judged in the brand's own colours, type and motion before any of it
 * is wired into a real page.
 */
export function LabClient() {
  const [ladder, setLadder] = useState(false);
  const [ghostSet, setGhostSet] = useState(0);

  return (
    <>
      {ladder ? <AdaptiveRoot ladder /> : null}

      <section className="container-page pb-16 pt-[calc(var(--header-h)+5rem)]">
        <p className="type-eyebrow text-accent">Internal preview</p>
        <h1 className="mt-5 max-w-[20ch] type-h1 text-balance">
          Baseline mekanikleri, Fourtune diliyle
        </h1>
        <p className="mt-6 max-w-[56ch] type-lead text-fg-secondary">
          Dördü de kuruldu. Hiçbiri yayın sayfalarına bağlı değil — bu sayfa
          sadece nasıl durduklarını görmen için.
        </p>
      </section>

      {/* ---------------------------------------------------------------- */}
      <Bench
        n="01"
        title="Intro loader"
        note="Sayfa yenilendiğinde perde zaten oynuyor. Hero'nun girişi perdeye bağlı: eskiden perdenin arkasında oynayıp bitiyordu, artık perde kalkarken başlıyor. Azaltılmış hareket açıksa bekleme 200ms'e iniyor ve perde kaymadan kayboluyor."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" onClick={() => window.location.reload()}>
            Perdeyi tekrar oynat
          </Button>
          <p className="type-caption text-fg-muted">
            Bekleme 1400ms · tavan 2600ms · çıkış 850ms
          </p>
        </div>
      </Bench>

      {/* ---------------------------------------------------------------- */}
      <Bench
        n="02"
        title="Adaptive rem ızgarası"
        note="Site genelinde yalnızca 1920px üstünde ölçek büyütme açık — bu tamamen ek bir davranış, mevcut hiçbir değeri bozmuyor. Aşağıdaki anahtar referansın tam merdivenini canlı uygular; 640px altında kök font 28px'e sıçradığı için mobilin nasıl şiştiğini burada görebilirsin."
      >
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant={ladder ? "primary" : "secondary"}
            onClick={() => setLadder((v) => !v)}
            aria-pressed={ladder}
          >
            {ladder ? "Tam merdiven açık" : "Tam merdiveni dene"}
          </Button>
          <p className="type-caption text-fg-muted">
            Pencereyi yeniden boyutlandırarak farkı izle.
          </p>
        </div>
      </Bench>

      {/* ---------------------------------------------------------------- */}
      <Bench
        n="03"
        title="Dev ghost başlıklar"
        note="8.2vw, iki satır, satır başına iki kelime. Kelimeler scroll ile zıt yönlere kayıyor ve içerik değişince maske açılışı yeniden tetikleniyor. Bir kelime tam mürekkep, kalanlar hayalet — yoksa 8vw'lik duvar gürültüye dönüşüyor."
      >
        <div className="mb-8 flex flex-wrap items-center gap-3">
          {GHOST_SETS.map((set, i) => (
            <Button
              key={set[0]}
              variant={i === ghostSet ? "primary" : "secondary"}
              onClick={() => setGhostSet(i)}
              aria-pressed={i === ghostSet}
            >
              {set[0]}
            </Button>
          ))}
        </div>
        <GhostHeading words={GHOST_SETS[ghostSet]} inkIndex={2} />
      </Bench>

      {/* ---------------------------------------------------------------- */}
      <Bench
        n="04"
        title="Cam kartlar + carousel"
        note="Header pill'iyle aynı cam token'larını kullanıyor, yani cama dokunduğunda ikisi birden değişiyor. Geçiş kaydırma değil çapraz geçiş: kart yüzen bir çip, kaydırmak olmayan bir film şeridi ima ederdi. İmleç üstündeyken ve odak içerideyken duruyor."
      >
        <div className="relative isolate overflow-hidden rounded-[var(--radius-lg)] border border-line bg-bg-elevated p-8">
          <div aria-hidden className="lab-glow absolute inset-0 -z-10 opacity-80" />
          <GlassCarousel slides={SLIDES} label="Önizleme" />
        </div>
      </Bench>
    </>
  );
}

function Bench({
  n,
  title,
  note,
  children,
}: {
  n: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container-page border-t border-line py-16 md:py-20">
      <Reveal>
        <div className="flex items-baseline gap-4">
          <span className="type-caption tabular-nums text-accent">{n}</span>
          <h2 className="type-h2">{title}</h2>
        </div>
        <p className="mt-4 max-w-[62ch] type-body text-fg-muted">{note}</p>
      </Reveal>
      <div className="mt-10">{children}</div>
    </section>
  );
}
