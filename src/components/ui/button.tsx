"use client";

import Link from "next/link";
import { motion } from "motion/react";
import clsx from "clsx";
import type { ReactNode } from "react";
import { springSnappy } from "@/lib/motion/springs";

type Variant = "primary" | "secondary" | "ghost" | "light" | "glass";
type Size = "md" | "lg";

const base =
  "relative inline-flex select-none items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-200 disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  /* `accent-solid` rather than the raw brand pink: white on Fortune Pink is
     3.85:1, below AA for text at this size. */
  primary: "bg-accent-solid text-onaccent hover:bg-accent-hover",
  secondary:
    "border border-line-strong text-fg hover:bg-surface material-thin",
  ghost: "text-fg-secondary hover:text-fg",
  /* For use on a dark band, where the page's own accent would sink into it. */
  light: "bg-white text-band hover:bg-accent hover:text-white",
  /* Clear glass for controls placed directly over photography. */
  glass:
    "glass-panel text-fg-secondary hover:bg-white/25 dark:bg-black/30 dark:hover:bg-black/45",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

/**
 * Feedback lives on pointer-*down* — waiting for the click to land feels dead.
 * The press scale is a spring, so releasing mid-press picks up from wherever
 * the button currently is instead of snapping back.
 */
const press = {
  whileTap: { scale: 0.96 },
  whileHover: { scale: 1.02 },
  transition: springSnappy,
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

/**
 * React's DOM handlers of these names collide with Motion's own props of the
 * same names (`onAnimationStart` takes an AnimationDefinition, not an event),
 * so they are dropped from the pass-through surface rather than cast away.
 */
type MotionConflicts =
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration"
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onDragEnter"
  | "onDragLeave"
  | "onDragOver"
  | "onDrop"
  | "style"
  | "ref";

const MotionLink = motion.create(Link);

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<typeof Link>,
    "href" | "className" | "children" | MotionConflicts
  >) {
  return (
    <MotionLink
      href={href}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...press}
      {...rest}
    >
      {children}
    </MotionLink>
  );
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: CommonProps & Omit<React.ComponentProps<"button">, "className" | "children" | MotionConflicts>) {
  return (
    <motion.button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...press}
      {...rest}
    >
      {children}
    </motion.button>
  );
}

/** External anchor with the same press behaviour. */
export function ButtonAnchor({
  href,
  children,
  variant = "secondary",
  size = "md",
  className,
  ...rest
}: CommonProps & { href: string } & Omit<
    React.ComponentProps<"a">,
    "href" | "className" | "children" | MotionConflicts
  >) {
  return (
    <motion.a
      href={href}
      className={clsx(base, variants[variant], sizes[size], className)}
      {...press}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
