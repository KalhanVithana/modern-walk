import { CATEGORY_COLORS } from "../constants/categories";
import { Product } from "../types/product-types";

async function fetchAllProducts(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();
  return products;
}

function filterAndColorProducts(products: Product[], categories: string[]): Product[][] {
  return categories.map((category) => {
    const lowerCategory = category.toLowerCase();
    return products
      .filter((item) => item?.category?.toLowerCase() === lowerCategory).sort((a, b) => b.rating.rate - a.rating.rate)  
      .map((item) => ({
        ...item,
        color: CATEGORY_COLORS[lowerCategory] || "#CCCCCC",
      }));
  });
}

export async function fetchFilteredProducts(categoryFilter: string): Promise<Product[]> {
  const products = await fetchAllProducts();
  const filtered = filterAndColorProducts(products, [categoryFilter]);
  return filtered[0] || [];
}

export async function fetchAlternatingFilteredProducts(categories: string[]): Promise<Product[]> {
  const products = await fetchAllProducts();
  const filteredProductsByCategory = filterAndColorProducts(products, categories);

  const maxLength = Math.max(...filteredProductsByCategory.map(arr => arr.length));
  const result: Product[] = [];

  for (let i = 0; i < maxLength; i++) {
    for (const categoryProducts of filteredProductsByCategory) {
      if (categoryProducts[i]) {
        result.push(categoryProducts[i]);
      }
    }
  }

  return result;
}
