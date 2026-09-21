/**
 * ─────────────────────────────────────────────────────────────
 *  ASSET CONSTANTS — SINGLE SOURCE OF TRUTH FOR IMAGES
 * ─────────────────────────────────────────────────────────────
 *  Reference every image/asset through this file so paths are
 *  never hardcoded inside components.
 * ─────────────────────────────────────────────────────────────
 */

import logo from "../assets/logo/logo.png";
import doctorImage from "../assets/logo/doctor_image.jpeg";
import alopeciaAreata from "../assets/Diseases/alopecia_areata.jpeg";
import burnInjury from "../assets/Diseases/burn_injury.jpeg";
import nailInfection from "../assets/Diseases/desease_1.jpeg";
import ringworm from "../assets/Diseases/ringworm.jpeg";
import eczemaBefore from "../assets/Diseases/eczema_before.jpeg";
import eczemaAfter from "../assets/Diseases/eczema_after_treatment.jpeg";
import pityriasisAlbaBefore from "../assets/Diseases/pityriasis_alba_before.jpeg";
import pityriasisAlbaAfter from "../assets/Diseases/pityriasis_alba_after_treatment.jpeg";
import palmerEczema from "../assets/Diseases/palmer_eczema.jpeg";
import type { StaticImageData } from "next/image";

export const assets = {
  logo: {
    src: logo,
    alt: "Shreedhar Homoeopathic Clinic logo",
    width: 520,
    height: 480,
  },
  doctorImage: {
    src: doctorImage,
    alt: "Doctor at Shreedhar Homoeopathic Clinic",
    width: 1178,
    height: 1600,
  },
} as const;

/**
 * A treatment case is shown in the "Real treatment results" gallery.
 *
 *  - `single` — one composite photo that already contains before & after.
 *  - `pair`   — two separate photos rendered side by side (before → after).
 */
export type DiseaseCase = {
  key: string;
  title: string;
  /** Short label describing the body area / condition type. */
  category: string;
  alt: string;
} & (
  | { kind: "single"; src: StaticImageData }
  | { kind: "pair"; before: StaticImageData; after: StaticImageData }
);

export const diseaseCases: DiseaseCase[] = [
  {
    kind: "single",
    key: "alopecia-areata",
    title: "Alopecia Areata",
    category: "Hair & Scalp",
    alt: "Alopecia areata before and after homoeopathic treatment",
    src: alopeciaAreata,
  },
  {
    kind: "pair",
    key: "eczema",
    title: "Eczema",
    category: "Skin",
    alt: "Eczema on the face and ear treated with homoeopathy",
    before: eczemaBefore,
    after: eczemaAfter,
  },
  {
    kind: "pair",
    key: "pityriasis-alba",
    title: "Pityriasis Alba",
    category: "Skin",
    alt: "Pityriasis alba on a child's face treated with homoeopathy",
    before: pityriasisAlbaBefore,
    after: pityriasisAlbaAfter,
  },
  {
    kind: "single",
    key: "palmer-eczema",
    title: "Palmar Eczema",
    category: "Skin",
    alt: "Palmar eczema on the hands before and after homoeopathic treatment",
    src: palmerEczema,
  },
  {
    kind: "single",
    key: "ringworm",
    title: "Ringworm",
    category: "Skin",
    alt: "Ringworm before and after homoeopathic treatment",
    src: ringworm,
  },
  {
    kind: "single",
    key: "burn-injury",
    title: "Burn Injury",
    category: "Wound Healing",
    alt: "Burn injury before and after homoeopathic treatment",
    src: burnInjury,
  },
  {
    kind: "single",
    key: "nail-infection",
    title: "Nail Infection",
    category: "Nails",
    alt: "Infected nail before and after homoeopathic treatment",
    src: nailInfection,
  },
];
