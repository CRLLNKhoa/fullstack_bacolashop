import React from "react";

export default function ListBanner() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="relative h-[220px] rounded-lg overflow-hidden">
        <div className="absolute z-10 py-[1.875rem] px-[2.5rem] max-w-[70%] flex flex-col items-start top-1/2 -translate-y-1/2">
          <p className="text-green-500 uppercase text-sm font-semibold font-dosis">weekend discount 40%</p>
          <h1 className="font-semibold text-2xl mt-1 line-clamp-1">Đậu & ngũ cốc</h1>
          <p className="text-sm text-muted-foreground mt-1">Thức ăn tốt nhất cho gia đỉnh</p>
          <div className="bg-background-second py-1 px-4 rounded-full text-white mt-2 text-sm">Mua ngay</div>
        </div>
        <img
          className="absolute h-full w-full top-0 left-0 right-0 bottom-0"
          src="/imgs/bacola-banner-01.jpg"
          alt="banner_img"
        />
      </div>
      <div className="relative h-[220px] rounded-lg overflow-hidden">
        <div className="absolute z-10 py-[1.875rem] px-[2.5rem] max-w-[70%] flex flex-col items-start top-1/2 -translate-y-1/2">
          <p className="text-green-500 uppercase text-sm font-semibold font-dosis">weekend discount 40%</p>
          <h1 className="font-semibold text-2xl mt-1 line-clamp-1">Bơ & trứng</h1>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-1">Một số sản phẩm rất được yêu thích</p>
          <div className="bg-background-second py-1 px-4 rounded-full text-white mt-2 text-sm">Mua ngay</div>
        </div>
        <img
          className="absolute h-full w-full top-0 left-0 right-0 bottom-0"
          src="/imgs/bacola-banner-02.jpg"
          alt="banner_img"
        />
      </div>
    </div>
  );
}
