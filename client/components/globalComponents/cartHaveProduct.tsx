"use client"
import React, { useState } from "react";

export default function CartHaveProduct() {
  return (
    <div
      className="w-[18.75rem] hidden opacity-0 group-hover:flex group-hover:opacity-100 max-h-[460px] absolute right-0 top-[50px] 
    px-4 pt-4 border shadow-lg rounded-lg flex-col justify-between"
    >
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto listProducts">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
      <div className="border-t py-4 flex flex-col">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-muted-foreground">
            Subtotal:
          </p>
          <p className="font-dosis font-semibold text-red-500 text-md">$7.25</p>
        </div>
        <button className="border mt-4 py-3 rounded-md font-semibold text-sm">
          View cart
        </button>
        <button className="bg-[#ED174A] hover:bg-[#ED174A]/80 duration-500 mt-2 text-white py-3 rounded-md font-semibold text-sm">
          Checkout
        </button>
      </div>
      <div className="border-t py-4">
        <p className="text-xs text-center">
          We reduce shipping prices to only 2.49$!
        </p>
      </div>
    </div>
  );
}

import { IoClose } from "react-icons/io5";

function ItemProduct() {
  const [isLoading,setIsLoading] = useState(false)
  return (
    <div className="relative cursor-pointer pb-4 border-b last:border-none">
      <div onClick={() => setIsLoading(!isLoading)} className="bg-red-500 absolute rounded-full text-white w-4 h-4 flex items-center justify-center">
        <IoClose className="w-3 h-3" />
      </div>
     {isLoading &&  <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 animate-pulse"></div>}
      <div className="flex items-center">
        <img
          className="w-[60px] h-[60px] mr-1"
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <p className="line-clamp-2 leading-4 text-sm font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            illo veritatis. Nihil, reprehenderit. Neque alias non atque tempore,
            delectus maiores nesciunt molestiae sequi fuga, itaque commodi,
            numquam nostrum maxime ad.
          </p>
          <div className="flex items-center text-sm mt-2">
            1 x{" "}
            <p className="font-dosis text-red-500 ml-4 font-semibold">$19,5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
