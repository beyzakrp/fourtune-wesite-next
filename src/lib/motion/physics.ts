/**
 * The two physical behaviours a gesture-driven interface needs beyond springs:
 * projecting where a flick is *going*, and resisting at a boundary instead of
 * stopping dead.
 */

/**
 * Where a flick would come to rest, using the exponential-decay model Apple
 * ships in the *Designing Fluid Interfaces* sample code. Snap to the target
 * nearest this point — never to the one nearest the release point, or a flick
 * feels like a drag.
 *
 * @param initialVelocity px/s at release
 * @param decelerationRate 0.998 for normal scroll feel, 0.99 for snappier
 */
export function project(initialVelocity: number, decelerationRate = 0.998): number {
  return ((initialVelocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/**
 * Progressive resistance past a boundary. The further out you drag, the less
 * the element follows — a hard stop reads as frozen, this reads as "responsive,
 * but there is nothing more here".
 */
export function rubberband(overshoot: number, dimension: number, constant = 0.55): number {
  return (overshoot * dimension * constant) / (dimension + constant * Math.abs(overshoot));
}

/** Pick the snap point closest to a (usually projected) value. */
export function nearestSnapPoint(value: number, points: number[]): number {
  return points.reduce((best, point) =>
    Math.abs(point - value) < Math.abs(best - value) ? point : best,
  );
}

export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);
