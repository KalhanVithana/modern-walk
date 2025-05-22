import CardItem from "@/components/card-item/card-item";
import { Product } from "@/app/types/product-types";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
   <>
      {products.map((item, i) => (
        <div key={i} className="px-3 w-max-screen">
          <CardItem item={item} />
        </div>
      ))}
</>
  );
}
