import Section from "@/components/section/section";
import ProductList from "@/components/product-list/product-list";
import { fetchAlternatingFilteredProducts } from "./lib/fetch-products";
import { CATEGORY } from "./constants/categories";
import { Suspense } from "react";

export default async function Home() {;
const products = await fetchAlternatingFilteredProducts(CATEGORY);
  return (
    <>
     <Suspense fallback={<p>Loading feed...</p>}>
      <Section>
        <ProductList products={products} />
      </Section>
      </Suspense>
    </>
  );
}
