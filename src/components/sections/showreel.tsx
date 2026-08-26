"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { springSnappy } from "@/lib/motion/springs";
import { Reveal } from "@/components/motion/reveal";

/**
 * The promo film as its own band, directly under the hero.
 *
 * The film carries its own typography, so nothing is laid over it — no scrim,
 * no headline, no colour wash. It gets a frame and the reader's full
 * attention instead of fighting a headline for the same pixels.
 *
 * Behaviour: it materialises once decodable, plays only while it is on screen,
 * and offers both a pause and a sound control. Autoplay has to start muted, so
 * unmuting is the reader's decision — never ours.
 */
export function Showreel({
  src,
  label,
  pauseLabel,
  playLabel,
  muteLabel,
  unmuteLabel,
}: {
  src: string;
  label: string;
  pauseLabel: string;
  playLabel: string;
  muteLabel: string;
  unmuteLabel: string;
}) {
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const inView = useInView(section, { amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start end", "center center"],
  });
  // Settles into place as it arrives, the way an Apple product page resolves
  // a hero image. Small numbers on purpose.
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [56, 28]);

  /**
   * Read the element's live state rather than latching onto its events: the
   * <video> is server-rendered and can reach `canplay` before React hydrates,
   * and a missed event would leave the frame invisible for good.
   */
  const subscribe = useCallback((onChange: () => void) => {
    const node = video.current;
    if (!node) return () => undefined;

    const events = [
      "loadeddata",
      "canplay",
      "canplaythrough",
      "play",
      "pause",
      "volumechange",
      "emptied",
      "error",
    ];
    events.forEach((event) => node.addEventListener(event, onChange));
    return () =>
      events.forEach((event) => node.removeEventListener(event, onChange));
  }, []);

  const ready = useSyncExternalStore(
    subscribe,
    () => (video.current?.readyState ?? 0) >= 2,
    () => false,
  );
  const playing = useSyncExternalStore(
    subscribe,
    () => video.current?.paused === false,
    () => false,
  );
  const muted = useSyncExternalStore(
    subscribe,
    () => video.current?.muted !== false,
    () => true,
  );

  /** Set once the reader presses pause, so scrolling back does not override. */
  const pausedByReader = useRef(false);

  useEffect(() => {
    const node = video.current;
    if (!node || reduced) return;

    if (inView && !pausedByReader.current) {
      void node.play().catch(() => {
        // Autoplay refused — the controls are right there.
      });
    } else {
      node.pause();
    }
  }, [inView, reduced]);

  function togglePlay() {
    const node = video.current;
    if (!node) return;

    if (node.paused) {
      pausedByReader.current = false;
      void node.play().catch(() => undefined);
    } else {
      pausedByReader.current = true;
      node.pause();
    }
  }

  function toggleSound() {
    const node = video.current;
    if (!node) return;
    node.muted = !node.muted;
    if (!node.muted && node.paused) void node.play().catch(() => undefined);
  }

  return (
    <section
      ref={section}
      aria-labelledby="showreel-label"
      className="container-page py-16 md:py-24"
    >
      <Reveal>
        <h2 id="showreel-label" className="type-eyebrow text-fg-muted">
          {label}
        </h2>
      </Reveal>

      <motion.div
        style={{ scale, borderRadius: radius }}
        className="motion-travel relative mt-6 overflow-hidden border border-line bg-bg-elevated"
      >
        <motion.video
          ref={video}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
          className="aspect-video w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
        />

        {ready ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springSnappy}
            className="material-thin material-edge absolute bottom-4 right-4 flex items-center gap-1 rounded-full border border-line p-1 md:bottom-6 md:right-6"
          >
            <ControlButton
              onClick={togglePlay}
              label={playing ? pauseLabel : playLabel}
            >
              {playing ? (
                <span aria-hidden className="flex gap-[3px]">
                  <span className="block h-3 w-[2px] bg-current" />
                  <span className="block h-3 w-[2px] bg-current" />
                </span>
              ) : (
                <span
                  aria-hidden
                  className="ml-[2px] size-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current"
                />
              )}
            </ControlButton>

            <ControlButton
              onClick={toggleSound}
              label={muted ? unmuteLabel : muteLabel}
            >
              <SoundIcon muted={muted} />
            </ControlButton>
          </motion.div>
        ) : null}
      </motion.div>
    </section>
  );
}

function ControlButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      whileTap={{ scale: 0.92 }}
      transition={springSnappy}
      className="flex size-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface-2"
    >
      {children}
    </motion.button>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="size-4" fill="none" aria-hidden>
      <path
        d="M7.5 2.5 4.2 5.2H2v5.6h2.2l3.3 2.7V2.5Z"
        fill="currentColor"
      />
      {muted ? (
        <path
          d="m10.5 6 3 4m0-4-3 4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M10.4 5.8a3 3 0 0 1 0 4.4M12.4 3.9a5.6 5.6 0 0 1 0 8.2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}
