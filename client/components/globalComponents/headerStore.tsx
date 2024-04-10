import Link from "next/link";
import React from "react";
import SelectLocation from "./selectLocation";
import SearchProduct from "./searchProduct";
import Account from "./account";

export default function eaderStore() {
  return (
    <header className="hidden lg:flex items-center justify-between w-full max-w-[1200px] px-[15px] mx-auto mt-6">
      <Link href="/">
        <div className="flex flex-col">
          <img
            className="w-[164px]"
            src="/imgs/bacola-logo.png"
            alt="Bacola Logo"
          />
          <p className="text-xs text-muted-foreground">
            Online Grocery Shoping Center
          </p>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <SelectLocation />
        <SearchProduct />
        <Account />
      </div>
    </header>
  );
}
