import React from "react";
import { GoChevronDown } from "react-icons/go";

const CategoriesList = () => {
  return (
    <div className="flex items-center relative text-md">
      <div className="hover:bg-background-second/10 hover:text-background-second transition-colors duration-200 cursor-pointer font-semibold px-4 py-2 rounded-full flex items-center gap-2 ">
        <p className="font-dosis">TRANG CHỦ</p>
        <GoChevronDown />
      </div>
      <div className="hover:bg-background-second/10 hover:text-background-second transition-colors duration-200 cursor-pointer font-semibold px-4 py-2 rounded-full flex items-center gap-2 ">
        <p className="font-dosis">CỬA HÀNG</p>
        <GoChevronDown />
      </div>
      <div className="hover:bg-background-second/10 hover:text-background-second transition-colors duration-200 cursor-pointer font-semibold px-4 py-2 rounded-full flex items-center gap-1 ">
        <p className="font-dosis">THỊT & HẢI SẢN</p>
      </div>
      <div className="hover:bg-background-second/10 hover:text-background-second transition-colors duration-200 cursor-pointer font-semibold px-4 py-2 rounded-full flex items-center gap-1 ">
        <p className="font-dosis">BÁNH NGỌT</p>
      </div>
      <div className="hover:bg-background-second/10 hover:text-background-second transition-colors duration-200 cursor-pointer font-semibold px-4 py-2 rounded-full flex items-center gap-1 ">
        <p className="font-dosis">GIẢI KHÁT</p>
      </div>
      <div className="hover:bg-background-second/10 hover:text-background-second transition-colors duration-200 cursor-pointer font-semibold px-4 py-2 rounded-full flex items-center gap-1 ">
        <p className="font-dosis">BLOG</p>
      </div>
      <div className="hover:bg-background-second/10 hover:text-background-second transition-colors duration-200 cursor-pointer font-semibold px-4 py-2 rounded-full flex items-center gap-1 ">
        <p className="font-dosis">LIÊN HỆ</p>
      </div>
    </div>
  );
};

export default CategoriesList;
