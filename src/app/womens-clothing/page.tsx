import { fetchFilteredProducts } from "../lib/fetch-products";
import { CATEGORY_WOMEN } from "../constants/categories";
import SectionHeading from "@/components/section-heading/section-heading";
import ProductList from "@/components/product-list/product-list";

export default async function WomensCloths() {
  const womenProducts = await fetchFilteredProducts(CATEGORY_WOMEN);
  return (<>
     <SectionHeading id={"Women's Clothing"}/>
<div className="grid max-w-screen-xl grid-cols-1 gap-6 px-4 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
  <ProductList products={womenProducts} />
</div>

    </>
  );
}
