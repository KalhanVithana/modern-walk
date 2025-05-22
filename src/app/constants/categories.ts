import { Category } from "../types/product-types";

export const CATEGORY_MEN = "men's clothing";
export const CATEGORY_WOMEN = "women's clothing";

export const CATEGORY_COLORS: Record<string, string> = {
  [CATEGORY_MEN]: "#2BD9AF",
  [CATEGORY_WOMEN]: "#FF5E84",
};
export const CATEGORY: Category[] = [CATEGORY_MEN, CATEGORY_WOMEN];
