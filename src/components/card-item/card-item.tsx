import { Card } from "@heroui/card";
import { Product } from "@/app/types/product-types";

interface CardItemProps {
  item: Product;
}

export default function CardItem({ item }: CardItemProps) {
const truncate = (text: string) => {
  const index = text.indexOf(" ");
  return index === -1 ? text : text.slice(0, index);
};  
  return (
    <Card className="border border-gray-200 shadow-md rounded-xl ">
      <div className=" p-4 flex flex-col h-[250px] cursor-pointer  justify-cente">
      <h2 className="mb-5 text-lg font-bold text-center truncate ">
        {truncate(item?.title)}
      </h2>
      <div>
        {item?.image && (
        <img 
          src={item?.image}
          alt={item?.title}
          className="flex-shrink-0 object-cover w-40 h-40 mx-auto mb-2 rounded-md"
        />
      )}
      </div>
      </div>
         <div className={` rounded-t-2xl p-4 pt-2`} style={{ backgroundColor: item?.color }}>
             <p className="font-bold text-center text-dark-blue ">
          ${item?.price.toFixed(2)}
        </p>
        <p className="flex-1 overflow-hidden text-sm text-dark-black line-clamp-3 ">
          {item?.description}
        </p>

     
      </div>
    </Card>
  );
}
