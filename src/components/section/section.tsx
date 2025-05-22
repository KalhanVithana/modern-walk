"use client";

import { useRouter } from "next/navigation";
import Categories from "../categories/categories";
import Slider from "react-slick";
import { ReactNode } from "react";
import SectionHeading from "../section-heading/section-heading";
import { CATEGORY_MEN } from "@/app/constants/categories";

export interface SectionProps {
  children?: ReactNode;
}
export default function Section({ children }: SectionProps) {
  const router = useRouter();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
     responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  };
  const handleNavigation = (item: string) => {
    const path = item === CATEGORY_MEN ? "/mens-clothing" : "/womens-clothing";
    router.push(path);
  };
  return (
    <>
        <SectionHeading id={"Flash Sale"} />
    <div className="my-10">
          <Slider {...settings}>{children}</Slider>
        </div>
        <SectionHeading id={"Categories"} />
        <Categories onClick={handleNavigation} />
      
    </>
  );
}
