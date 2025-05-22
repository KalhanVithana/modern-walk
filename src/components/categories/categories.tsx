import { CATEGORY } from '@/app/constants/categories';
import { Card } from '@heroui/card';

interface CategoriesProps {
  onClick: (item: string) => void;
}

export default function Categories({ onClick }: CategoriesProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {CATEGORY.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => onClick(item)}
        >
          <Card
            className={`w-full h-[180px] rounded-xl flex justify-center items-center text-center font-bold text-white text-2xl ${
              index === 0 ? 'bg-light-green' : 'bg-light-pink'
            }`}
          >
            {item}
          </Card>
        </div>
      ))}
    </div>
  );
}
