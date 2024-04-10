"use client"
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import ListCategories from "./listCategories";

const CategoriesButton = () => {
  const [isShow,setIsShow] = useState(true)
  return (
    <div
      onClick={() => setIsShow(!isShow)}
      className="relative flex items-center bg-background-second cursor-pointer p-4 text-white rounded-full
          font-semibold"
    >
      <MdMenu className="w-5 h-5" />
      <h2 className="text-dosis text-sm ml-2 mr-6">TẤT CẢ DANH MỤC</h2>
      <FaAngleDown />
      <span className="absolute -bottom-2 left-9 text-[10px] border border-white bg-[#F3F4F7] text-muted-foreground px-2 rounded-full">
        Hiện đang 63 sản phẩm
      </span>
      {isShow && <ListCategories show={isShow} />}
    </div>
  );
};

export default CategoriesButton;
