/**
 * ─────────────────────────────────────────────────────────────
 *  ASSET CONSTANTS — SINGLE SOURCE OF TRUTH FOR IMAGES
 * ─────────────────────────────────────────────────────────────
 *  Reference every image/asset through this file so paths are
 *  never hardcoded inside components.
 * ─────────────────────────────────────────────────────────────
 */

import logo from "../assets/logo/logo.png";
import doctorImage from "../assets/logo/doctor_image.png";
import alopeciaAreata from "../assets/Diseases/alopecia_areata.jpeg";
import burnInjury from "../assets/Diseases/burn_injury.jpeg";
import desease1 from "../assets/Diseases/desease_1.jpeg";
import ringworm from "../assets/Diseases/ringworm.jpeg";
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
    width: 289,
    height: 355,
  },
} as const;

export type DiseaseCase = {
  key: string;
  title: string | null;
  alt: string;
  src: StaticImageData;
};

export const diseaseCases: DiseaseCase[] = [
  {
    key: "alopecia-areata",
    title: "Alopecia Areata",
    alt: "Alopecia areata before and after homoeopathic treatment",
    src: alopeciaAreata,
  },
  {
    key: "burn-injury",
    title: "Burn Injury",
    alt: "Burn injury before and after homoeopathic treatment",
    src: burnInjury,
  },
  {
    key: "case-1",
    title: null,
    alt: "Case study before and after homoeopathic treatment",
    src: desease1,
  },
  {
    key: "ringworm",
    title: "Ringworm",
    alt: "Ringworm before and after homoeopathic treatment",
    src: ringworm,
  },
];
