import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Countdown from "./countdown";

export default function HotProduct() {
  return (
    <div className="flex flex-col bg-white relative">
      <Link href={"/"} className="absolute top-0 left-0 right-0 bottom-0 bg-transparent z-10"></Link>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-dosis font-semibold text-xl leading-5 uppercase">
            Sản phẩm bán chạy nhất <span className="text-red-500">Trong tuần</span>
          </h1>
          <p className="text-xs text-muted-foreground">
          Đừng bỏ lỡ cơ hội giảm giá đặc biệt chỉ trong tuần này.
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
      <div className="border border-[#ED174A] rounded-lg p-8 mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="relative flex items-center justify-center lg:max-h-[160px] lg:max-w-[160px]">
          <span className="absolute top-0 left-0 flex items-center justify-center font-dosis text-3xl text-white bg-[#ED174A] size-[4.125rem] rounded-full">19%</span>
          <img
            className="w-full h-full"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-600x540.jpg"
            alt="product_img"
          />
        </div>
        <div className="flex flex-col lg:w-[70%]">
          <div className="flex items-center">
            <p className="font-dosis line-through font-semibold text-muted-foreground">$5.49</p>
            <p className="font-dosis text-red-500 font-semibold text-xl ml-2">$4.49</p>
          </div>
          <h1 className="font-semibold text-lg mb-2">Chobani Complete Vanilla Greek Yogurt</h1>
          <div className="flex items-center gap-4">
            <p className="text-xs">1kg</p>
            <p className="text-xs text-green-500 font-dosis font-semibold uppercase">Còn hàng</p>
          </div>
          <div className="relative rounded-full bg-muted-foreground/20 h-3 mt-4" title="Chobani Complete Vanilla Greek Yogurt">
            <div className="absolute top-0 bottom-0 w-1/2 duration-500 rounded-full bg-gradient-to-r from-red-500 to-orange-500"></div>
          </div>
          <Countdown />
        </div>
      </div>
    </div>
  );
}
