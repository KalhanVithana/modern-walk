import { fetchFilteredProducts } from "../lib/fetch-products";
import { CATEGORY_MEN } from "../constants/categories";
import SectionHeading from "@/components/section-heading/section-heading";
import ProductList from "@/components/product-list/product-list";

export default async function MensCloth() {
  const menProducts = await fetchFilteredProducts(CATEGORY_MEN);
  return (
    <>
      <SectionHeading id={"Men's Clothing"} />
<div className="grid max-w-screen-xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <ProductList products={menProducts} />
      </div>
    </>
  );
}
