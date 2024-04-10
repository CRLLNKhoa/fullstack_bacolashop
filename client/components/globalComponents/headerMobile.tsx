import Link from "next/link";
import React from "react";

export default function HeaderMobile() {
  return (
    <div className="flex w-full lg:hidden items-center justify-between bg-white sticky top-0 left-0 right-0 z-50">
      <Link href={"/"}>
        <img
          className="w-[94px] h-6"
          src="/imgs/bacola-logo-mobile.png"
          alt="logo-mobile"
        />
      </Link>
    </div>
  );
}
