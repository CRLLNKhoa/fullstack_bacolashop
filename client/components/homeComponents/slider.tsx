"use client";
import React, { FC, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowNarrowRight } from "react-icons/hi";
import { cn } from "@/lib/utils";

const SliderStore: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "flex",
    beforeChange: (prev: any, next: any) => {
      setCurrentSlide(next);
    },
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "10%",
          display: "flex",
          gap: 4,
        }}
      >
        {dots.map((item: any, index: number) => {
          return <div key={index}>{item.props.children}</div>;
        })}
      </div>
    ),
    customPaging: (index: number) => {
      return (
        <div
          className={cn(
            "w-4 h-4 rounded-full flex items-center justify-center cursor-pointer",
            index === currentSlide && "bg-black/10"
          )}
        >
          <p
            className={cn(
              "w-[6px] h-[6px] rounded-full bg-black/20",
              index === currentSlide && "bg-black"
            )}
          ></p>
        </div>
      );
    },
  };
  return (
    <div className="h-[486px] w-full rounded-lg overflow-hidden">
      <Slider {...settings} className="rounded-lg w-full h-[486px] relative">
        <div className="w-full h-[486px] rounded-lg relative">
          <img
            className="absolute top-0 left-0 right-0 bottom-0 rounded-lg"
            src="/imgs/slider-image-1.jpg"
            alt="slider-image"
          />
          <div className="flex flex-col absolute z-10 max-w-[70%] p-[5rem]">
            <div className="flex items-center">
              <p className="font-dosis text-sm">ƯU ĐÃI ĐỘC QUYỀN</p>
              <div className="bg-gradient-to-r from-green-300 to-transparent px-3 py-1 text-green-800 font-bold font-dosis text-sm ml-2 rounded-full">
                Giảm 20%
              </div>
            </div>
            <h1 className="font-bold text-5xl leading-tight">
              Chuyên gia trong cửa hàng tạp hóa
            </h1>
            <p className="mt-2">Chỉ trong tuần này. Đừng bỏ lỡ...</p>
            <div className="flex items-end gap-4 mt-4">
              <p>Giá chỉ từ</p>
              <b className="text-red-500 font-dosis  font-semibold text-4xl">
                $7.99
              </b>
            </div>
            <div
              className="bg-background-second flex items-center justify-center gap-4 
            w-[160px] rounded-full py-2 text-white mt-4"
            >
              <p className="font-semibold">Mua ngay</p>
              <HiArrowNarrowRight className="" />
            </div>
          </div>
        </div>
        <div className="w-full h-[486px] rounded-lg relative">
          <img
            className="absolute top-0 left-0 right-0 bottom-0 rounded-lg"
            src="/imgs/slider-image-2.jpg"
            alt="slider-image"
          />
          <div className="flex flex-col absolute z-10 max-w-[70%] p-[5rem]">
            <div className="flex items-center">
              <p className="font-dosis text-sm">ƯU ĐÃI ĐỘC QUYỀN</p>
              <div className="bg-gradient-to-r from-green-300 to-transparent px-3 py-1 text-green-800 font-bold font-dosis text-sm ml-2 rounded-full">
                Giảm -30%
              </div>
            </div>
            <h1 className="font-bold text-5xl leading-tight">
            Cho gia đình bạn ăn những gì tốt nhất
            </h1>
            <p className="mt-2">Chỉ trong tuần này. Đừng bỏ lỡ...</p>
            <div className="flex items-end gap-4 mt-4">
              <p>Giá chỉ từ</p>
              <b className="text-red-500 font-dosis  font-semibold text-4xl">
                $8.99
              </b>
            </div>
            <div
              className="bg-background-second flex items-center justify-center gap-4 
            w-[160px] rounded-full py-2 text-white mt-4"
            >
              <p className="font-semibold">Mua ngay</p>
              <HiArrowNarrowRight className="" />
            </div>
          </div>
        </div>
        <div className="w-full h-[486px] rounded-lg relative">
          <img
            className="absolute top-0 left-0 right-0 bottom-0 rounded-lg"
            src="/imgs/slider-3.jpg"
            alt="slider-image"
          />
          <div className="flex flex-col absolute z-10 max-w-[70%] p-[5rem]">
            <div className="flex items-center">
              <p className="font-dosis text-sm">ƯU ĐÃI ĐỘC QUYỀN</p>
              <div className="bg-gradient-to-r from-green-300 to-transparent px-3 py-1 text-green-800 font-bold font-dosis text-sm ml-2 rounded-full">
                Giảm 40%
              </div>
            </div>
            <h1 className="font-bold text-5xl leading-tight">
            Cửa hàng tạp hóa tràn đầy cảm hứng
            </h1>
            <p className="mt-2">Chỉ trong tuần này. Đừng bỏ lỡ...</p>
            <div className="flex items-end gap-4 mt-4">
              <p>Giá chỉ từ</p>
              <b className="text-red-500 font-dosis font-semibold text-4xl">
                $6.99
              </b>
            </div>
            <div
              className="bg-background-second flex items-center justify-center gap-4 
            w-[160px] rounded-full py-2 text-white mt-4"
            >
              <p className="font-semibold">Mua ngay</p>
              <HiArrowNarrowRight className="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderStore;
