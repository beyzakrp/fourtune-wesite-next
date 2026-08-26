import type { Transition } from "motion/react";

/**
 * Apple describes springs with two designer-facing parameters — *damping ratio*
 * (how much overshoot) and *response* (how quickly the value reaches target).
 * Motion's `visualDuration` + `bounce` pair maps onto exactly that:
 *
 *   response  ->  visualDuration
 *   damping   ->  1 − bounce   (damping 1.0 = bounce 0, critically damped)
 *
 * Default to critically damped. Only spend bounce where the gesture itself
 * carried momentum — a flick, a throw, a drag release. Overshoot on something
 * that merely faded in reads as wrong.
 */

/** damping 1.0 / response 0.4 — repositioning, the house default. */
export const springMove: Transition = {
  type: "spring",
  bounce: 0,
  visualDuration: 0.4,
};

/** damping 1.0 / response 0.3 — small, frequent UI changes. */
export const springSnappy: Transition = {
  type: "spring",
  bounce: 0,
  visualDuration: 0.28,
};

/** damping 1.0 / response 0.6 — large surfaces, which should feel heavier. */
export const springSlow: Transition = {
  type: "spring",
  bounce: 0,
  visualDuration: 0.65,
};

/** damping ~0.8 / response 0.4 — rotation and other momentum-carrying motion. */
export const springRotate: Transition = {
  type: "spring",
  bounce: 0.2,
  visualDuration: 0.4,
};

/** damping ~0.8 / response 0.3 — drawers and sheets released from a drag. */
export const springSheet: Transition = {
  type: "spring",
  bounce: 0.2,
  visualDuration: 0.3,
};

/** Follows a pointer. Stiff enough to feel attached, soft enough to lag a little. */
export const springFollow: Transition = {
  type: "spring",
  bounce: 0,
  visualDuration: 0.22,
};

/** Non-gestural entrances — a plain cross-fade with no travel. */
export const fade: Transition = { duration: 0.3, ease: [0.32, 0.72, 0, 1] };

/** Mirrored curves, so a reversible transition retraces its own path. */
export const easeOut = [0.32, 0.72, 0, 1] as const;
export const easeIn = [1, 0, 0.68, 0.28] as const;

/** Stagger children by index without re-deriving the delay at each call site. */
export function stagger(index: number, step = 0.06, max = 0.4): number {
  return Math.min(index * step, max);
}
