import Link from "next/link";
import React from "react";

export default function CountProductInCategories() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 border rounded-lg">
      <Link href={"/"} className="lg:border-r border-b flex flex-col items-center p-6">
        <img
          className="size-[192px]"
          src="/imgs/baverages-1.jpg"
          alt="img_categories"
        />
        <div className="flex flex-col items-center">
          <h2 className="font-semibold leading-4 mb-2">Beverages</h2>
          <p className="text-xs text-muted-foreground">11 items</p>
        </div>
      </Link>
      <div className="flex lg:flex-col lg:border-r">
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b border-r lg:border-r-transparent flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/biscuitssnacks-1.jpg"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Biscuits & Snacks</h2>
            <p className="text-xs text-muted-foreground">6 items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/fruitvegetables-1.jpg"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Fruits & Vegetables</h2>
            <p className="text-xs text-muted-foreground">12 items</p>
          </div>
        </Link>
      </div>
      <div className="flex lg:flex-col lg:border-r">
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b border-r lg:border-r-transparent flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/breadbakery-1.jpg"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Breads & Bakery</h2>
            <p className="text-xs text-muted-foreground">6 items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/category-image2.png"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Grocery & Stapies</h2>
            <p className="text-xs text-muted-foreground">12 items</p>
          </div>
        </Link>
      </div>
      <div className="flex lg:flex-col lg:border-r">
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b border-r lg:border-r-transparent flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/dairy-1.jpg"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Breakfast & Dairy</h2>
            <p className="text-xs text-muted-foreground">6 items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/household-1.jpg"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Household Needs</h2>
            <p className="text-xs text-muted-foreground">12 items</p>
          </div>
        </Link>
      </div>
      <div className="flex lg:flex-col">
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b border-r lg:border-r-transparent flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/category-image4.png"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Frozen Foods</h2>
            <p className="text-xs text-muted-foreground">6 items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex flex-col lg:flex-row items-center justify-center border-b flex-1 p-4"
        >
          <img
            className="lg:size-[70px] size-[120px] lg:mr-4"
            src="/imgs/meat-1.jpg"
            alt="img_categories"
          />
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="font-semibold leading-4 mb-2">Meats & Seafood</h2>
            <p className="text-xs text-muted-foreground">12 items</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
