import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { PiHandbagSimple } from "react-icons/pi";

export default function HeaderMobile() {
  return (
    <div className="flex w-full lg:hidden h-[64px] shadow-lg px-4 items-center justify-between bg-white sticky top-0 left-0 right-0 z-50">
      <div>
        <AiOutlineMenu className="w-6 h-6" />
      </div>
      <Link href={"/"}>
        <img
          className="w-[94px] h-6"
          src="/imgs/bacola-logo-mobile.png"
          alt="logo-mobile"
        />
      </Link>
      <div className="flex items-center gap-2">
        <p className="font-dosis font-semibold">$82.95</p>
        <div className="relative">
          <PiHandbagSimple className="w-6 h-6" />
          <span className="absolute -right-[6px] -top-[5px] bg-red-500 size-4 flex items-center 
          justify-center rounded-full text-[10px] text-white">9</span>
        </div>
      </div>
    </div>
  );
}
