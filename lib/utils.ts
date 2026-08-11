import { clsx } from "clsx";

export type ClassValue = string | number | null | false | undefined | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
