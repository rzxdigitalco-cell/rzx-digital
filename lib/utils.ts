import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind class names safely, resolving conflicting utility
 * classes (e.g. "p-4" vs "p-6") in favor of the last one applied.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
