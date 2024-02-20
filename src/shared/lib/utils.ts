import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function waitHalfSecond<T>(func: () => T): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = func();
      resolve(result);
    }, 500);
  });
}
