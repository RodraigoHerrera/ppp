import type { PredioData } from "@/types/predio";
import { losCorralesPredio } from "./losCorrales";
import { laAhogadaPredio } from "./laAhogada";
import { monteCristoPredio } from "./monteCristo";

export const prediosBySlug = {
  [losCorralesPredio.slug]: losCorralesPredio,
  [laAhogadaPredio.slug]: laAhogadaPredio,
  [monteCristoPredio.slug]: monteCristoPredio,
} satisfies Record<string, PredioData>;