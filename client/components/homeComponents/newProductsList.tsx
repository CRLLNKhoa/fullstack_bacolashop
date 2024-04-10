import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import ProductCard from "./productCard";

export default function NewProductsList() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-dosis font-semibold text-xl leading-5 uppercase">
            Sản phẩm mới
          </h1>
          <p className="text-xs text-muted-foreground">
            Đừng bỏ lỡ cơ hội giảm giá đặc biệt với các sản phẩm mới.
          </p>
        </div>
        <button
          className="border w-[120px] py-2 rounded-full flex items-center 
            justify-center gap-4 text-xs hover:text-black duration-500"
        >
          Xem tất cả
          <FaArrowRightLong className="text-muted-foreground" />
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-l mt-8 rounded-lg overflow-hidden">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
