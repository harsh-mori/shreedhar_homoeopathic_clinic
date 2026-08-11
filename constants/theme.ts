/**
 * ─────────────────────────────────────────────────────────────
 *  DESIGN TOKENS — SINGLE SOURCE OF TRUTH
 * ─────────────────────────────────────────────────────────────
 *  Every color, font size, weight, line-height, letter-spacing
 *  and radius used across the site lives here.
 *
 *  Edit this file → run `npm run tokens` → Tailwind utilities
 *  (bg-primary, text-secondary, text-4xl, rounded-lg …) update
 *  automatically. The generator is `scripts/generate-tokens.mjs`.
 *
 *  Design rules for this project:
 *    - No gradients
 *    - No box shadows
 *    - Palette: cream (primary) · white · black · green (secondary)
 * ─────────────────────────────────────────────────────────────
 */

export const theme = {
  colors: {
    // Brand primary — warm cream
    primary: "#FEF2E2",
    primaryLight: "#FFF9F0",

    // Super-light greenish container / card surface
    surface: "#F4F8F3",

    // Brand secondary — botanical green (used for accents/CTA)
    secondary: {
      50: "#F2F7F3",
      100: "#E1EEE4",
      200: "#C3DDC9",
      300: "#99C3A4",
      400: "#6CA37C",
      500: "#4B8660",
      600: "#396B4B",
      700: "#2E563D",
      800: "#274533",
      900: "#21392B",
      950: "#111F18",
    },

    // Neutrals — white & black anchors plus grey text scale
    white: "#FFFFFF",
    black: "#0A0A0A",
    grey: {
      50: "#FAFAFA",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#18181B",
      950: "#09090B",
    },
  },

  fontFamily: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
  },

  fontWeight: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeight: {
    none: 1,
    tight: 1.15,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.65,
    loose: 2,
  },

  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.02em",
    wider: "0.05em",
    widest: "0.12em",
  },

  borderRadius: {
    none: "0",
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.5rem",
    full: "9999px",
  },

  // Layout
  containerWidth: {
    sm: "40rem",
    md: "48rem",
    lg: "64rem",
    default: "75rem",
  },

  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
  },
} as const;

export type Theme = typeof theme;
