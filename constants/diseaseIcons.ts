/**
 * ─────────────────────────────────────────────────────────────
 *  DISEASE ICONS — VISUAL MAP FOR THE DISEASES PAGE
 * ─────────────────────────────────────────────────────────────
 *  Keeps icon choices out of the components and out of the
 *  content file (`data/site.ts` stays plain text/data only).
 *
 *  `diseaseIcons` is keyed by disease slug; anything missing
 *  falls back to its category icon.
 * ─────────────────────────────────────────────────────────────
 */

import {
  Activity,
  Baby,
  Bone,
  Brain,
  Droplet,
  Droplets,
  Ear,
  Flame,
  Hand,
  HeartPulse,
  Ribbon,
  Scissors,
  ShieldAlert,
  Stethoscope,
  Utensils,
  Venus,
  Waves,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { DiseaseCategoryId } from "@/data/site";

export const categoryIcons: Record<DiseaseCategoryId, LucideIcon> = {
  "skin-hair": Hand,
  internal: HeartPulse,
  "bones-nerves": Bone,
  "women-children": Baby,
  "ent-eye": Ear,
  mind: Brain,
  serious: ShieldAlert,
};

export const diseaseIcons: Record<string, LucideIcon> = {
  "skin-diseases": Flame,
  "digestive-disorders": Utensils,
  "bone-joint-problems": Bone,
  "metabolic-chronic-diseases": Activity,
  "asthma-allergies": Wind,
  "mental-health": Brain,
  "hair-loss-alopecia": Scissors,
  "ent-disorders": Ear,
  "childhood-disorders": Baby,
  "women-health": Venus,
  "anemia-low-blood-count": Droplet,
  "nervous-system-disorders": Zap,
  "worms-appendicitis-hernia": Stethoscope,
  "varicose-vomiting-ulcers": Waves,
  "prostate-piles": Droplets,
  "kidney-gallstones": Droplets,
  "ear-discharge-hearing-loss": Ear,
  "cancer-complex-diseases": Ribbon,
};
