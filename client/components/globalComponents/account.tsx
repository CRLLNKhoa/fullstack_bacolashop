"use client";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import Cart from "./Cart";

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex items-center gap-4">
      {isLogin ? (
        <div className="h-[42px] w-[42px] border rounded-full flex items-center justify-center cursor-pointer overflow-hidden">
          <img
            src="https://s120-ava-talk.zadn.vn/5/0/c/7/101/120/c9936b55710e1e0809373a425e2557fb.jpg"
            className="w-full h-full"
          />
        </div>
      ) : (
        <div className="h-[42px] w-[42px] border rounded-full flex items-center justify-center cursor-pointer">
          <FaUser className="w-6 h-6 text-muted-foreground" />
        </div>
      )}
      <div className="">
        <Cart />
      </div>
    </div>
  );
}
