"use client";
import React, { useState } from "react";
import RenderRating from "../globalComponents/rating";
import { SlSizeFullscreen } from "react-icons/sl";
import { GoHeart } from "react-icons/go";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

export default function ProductCardSlider() {
  const [isShowAction, setIsShowAction] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const handleWishList = () => {
    Toast.fire({
      icon: "success",
      title: "Add wishlist success",
    });
  };

  return (
    <div
      onMouseEnter={() => setIsShowAction(true)}
      onMouseLeave={() => setIsShowAction(false)}
      className="flex flex-col border-r"
    >
      <div className="p-[1.25rem] relative overflow-hidden cursor-pointer">
        <div className="w-full h-[160px]">
          <img
            className="w-full h-full object-cover"
            src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-59-346x310.jpg"
            alt="img-product"
          />
        </div>
        <div className="absolute top-4 left-4 flex flex-col items-start justify-start text-[10px]">
          <span className="bg-background-second text-white px-2 py-1 text-xs rounded-sm font-semibold">
            12%
          </span>
          <span className="bg-[#71778E] text-white font-semibold px-2 py-1 rounded-sm mt-1">
            RECOMMENDED
          </span>
        </div>
        {isShowAction && (
          <div className="absolute right-4 top-4 flex flex-col gap-2">
             <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="border shadow-lg h-[42px] w-[42px] flex items-center justify-center rounded-full cursor-pointer hover:bg-background-primary duration-500 hover:text-white"
        >
          <SlSizeFullscreen />
        </motion.div>
            <motion.div
              onClick={handleWishList}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="border shadow-lg h-[42px] w-[42px] flex items-center justify-center rounded-full cursor-pointer hover:bg-background-primary duration-500 hover:text-white"
            >
              <GoHeart className="w-5 h-5" />
            </motion.div>
          </div>
        )}
      </div>
      <div className="flex flex-col p-4 pt-0">
        <p className="text-md font-semibold duration-500 cursor-pointer leading-5 line-clamp-2 hover:text-background-primary">
          Field Roast Chao Cheese Creamy Original
        </p>
        <span className="text-green-500 my-2 text-xs font-dosis font-semibold uppercase">
          Còn hàng
        </span>
        {/* <span className='text-red-500 my-2 text-xs font-dosis font-semibold uppercase'>sold out</span> */}
        <div className="flex items-center mb-2">
          <RenderRating rating={3.5} />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-muted-foreground line-through">
            $24.00
          </p>
          <p className="font-dosis text-red-500 font-bold text-lg">$19.50</p>
        </div>
        <button
          className="border border-background-second rounded-full text-background-second hover:bg-background-second
         hover:text-white duration-500 py-1 text-sm font-dosis font-semibold mt-4"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
}
