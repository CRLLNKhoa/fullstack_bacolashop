"use client";
import React from "react";
import { FaArrowRightLong, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";
import ProductCardSlider from "./productCardSlider";

interface Product {
  id: string;
  slug: string;
  name_product: string;
  type?: string;
  price: number;
  discount: number;
  rating: number;
  count_rating: number;
  count_product: number;
}

interface Props {
  title: string;
  subtitle: string;
  listProducts: Product[];
}

export default function SliderProducts() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      }]
  };

  return (
    <div className="flex flex-col w-full z-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <h1 className="font-semibold font-dosis text-xl leading-5 uppercase">
            Bán chạy nhất
          </h1>
          <p className="text-xs text-muted-foreground">
          Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng.
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
      <div className="mt-8 border rounded-lg">
        <Slider {...settings}>
          <ProductCardSlider />
          <ProductCardSlider />
          <ProductCardSlider />
          <ProductCardSlider />
        </Slider>
      </div>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const {onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/3 -translate-y-1/2 w-[42px] h-[42px] 
    rounded-full border flex items-center justify-center translate-x-[21px]
     bg-white cursor-pointer shadow-lg"
    >
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
    onClick={onClick}
    className="absolute left-0 top-1/3 -translate-y-1/2 w-[42px] h-[42px] 
  rounded-full border flex items-center justify-center -translate-x-[21px]
   bg-white cursor-pointer shadow-lg z-10"
  >
    <FaChevronLeft />
  </div>
  );
}
