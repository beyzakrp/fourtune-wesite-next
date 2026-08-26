"use client";

import { useSyncExternalStore } from "react";

/**
 * A one-way latch the intro loader flips when the curtain is about to lift.
 *
 * The hero's entrance is gated on it: without the gate the headline would play
 * its reveal *behind* the curtain and be finished by the time anyone could see
 * it. A module-level store rather than context, because the loader and the
 * hero are siblings and neither should have to own the other.
 */
const FAILSAFE_MS = 3200;

let ready = false;
let failsafe: ReturnType<typeof setTimeout> | null = null;
const listeners = new Set<() => void>();

export function markIntroReady() {
  if (ready) return;
  ready = true;
  if (failsafe) {
    clearTimeout(failsafe);
    failsafe = null;
  }
  // Also expose the state on the document so CSS — and anything that is not a
  // React subscriber — can hang off the same signal.
  if (typeof document !== "undefined") {
    document.documentElement.dataset.intro = "ready";
  }
  for (const listener of listeners) listener();
}

function subscribe(callback: () => void) {
  listeners.add(callback);

  /**
   * Failsafe. Gating the hero on the loader means a loader that never
   * finishes — an exception in its effect, a future refactor that drops it
   * from the tree — would leave the site's most important text permanently
   * invisible. The latch therefore releases itself if nothing has flipped it
   * by the time the loader's own hard ceiling would have passed.
   */
  if (!ready && failsafe === null && typeof window !== "undefined") {
    failsafe = setTimeout(markIntroReady, FAILSAFE_MS);
  }

  return () => {
    listeners.delete(callback);
  };
}

/** `false` on the server, so the gated content renders in its hidden state. */
export function useIntroReady() {
  return useSyncExternalStore(
    subscribe,
    () => ready,
    () => false,
  );
}
