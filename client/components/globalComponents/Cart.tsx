import React from "react";
import { PiHandbagLight } from "react-icons/pi";
import CartEmpty from "./cartEmpty";
import CartHaveProduct from "./cartHaveProduct";

export default function Cart() {
  return (
    <div className="flex items-center gap-4 relative group after:content-[''] after:top-[40px] after:w-full after:h-6 after:absolute">
      <h2 className="font-dosis font-semibold">$0.00</h2>
      <div className="relative h-[42px] w-[42px] bg-red-100 rounded-full flex items-center justify-center cursor-pointer">
        <PiHandbagLight className="w-5 h-5 text-red-500" />
        <span className="absolute -right-1 top-0 bg-red-600 flex items-center font-semibold justify-center rounded-full text-[0.625rem] h-[1.0625rem] min-w-[1.0625rem] text-white">
          99
        </span>
      </div>
      {/* <CartEmpty /> */}
      <CartHaveProduct />
    </div>
  );
}
