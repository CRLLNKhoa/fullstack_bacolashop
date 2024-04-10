import React from "react";
import { LuMail } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="flex flex-col mt-16">
      <div className="bg-background-primary p-4 pb-0 lg:p-16  px-[15px] relative lg:h-[356px] flex flex-col">
        <div className="flex flex-col text-white">
          <p>$20 discount for your first order</p>
          <h2 className="font-bold text-3xl mb-4">
            Join our newsletter and get...
          </h2>
          <p className="text-sm text-white/80 mb-1">
            Join our email subscription now to get updates
          </p>
          <p className="text-sm text-white/80">on promotions and coupons.</p>
        </div>
        <div className="bg-white p-2 lg:w-[470px] flex items-center rounded-lg mt-4 mb-4 lg:mt-auto">
          <LuMail className="w-6 h-6 text-muted-foreground font-bold ml-2 mr-2" />
          <input
            className="outline-none flex-1 pr-2"
            type="email"
            name="email_input"
            id="email_input"
            placeholder="Your email address"
          />
          <button className="bg-background-primary text-white  px-4 py-4 rounded-md text-sm font-semibold">
            Subscriber
          </button>
        </div>
        <img
          src="/imgs/coupon.png"
          alt="coupon-png"
          className="lg:absolute mx-auto left-1/2 bottom-0 w-[510px]"
        />
      </div>
      <div className="bg-[#F7F8FD] w-full">
        <div className="w-full max-w-[1200px] px-[15px] mx-auto">
          <div className="flex items-center flex-wrap gap-y-4 py-10 border-b">
            <div className="flex items-center border-r lg:w-1/4 w-full">
              <img className="w-6 h-6" src="/svgs/fresh.svg" alt="SVG_IMG" />
              <p className="text-sm text-muted-foreground ml-2 font-bold font-dosis">
                Everyday fresh products
              </p>
            </div>
            <div className="flex items-center border-r lg:w-1/4 w-full lg:justify-center">
              <img className="w-6 h-6" src="/svgs/delivery.svg" alt="SVG_IMG" />
              <p className="text-sm text-muted-foreground ml-2 font-bold font-dosis">
                Free delivery for order over $70
              </p>
            </div>
            <div className="flex items-center border-r lg:w-1/4 w-full lg:justify-center">
              <img className="w-6 h-6" src="/svgs/discount.svg" alt="SVG_IMG" />
              <p className="text-sm text-muted-foreground ml-2 font-bold font-dosis">
                Daily Mega Discounts
              </p>
            </div>
            <div className="flex items-center lg:w-1/4 w-full lg:justify-center">
              <img className="w-6 h-6" src="/svgs/coin.svg" alt="SVG_IMG" />
              <p className="text-sm text-muted-foreground ml-2 font-bold font-dosis">
                Best price on the market
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-5 mt-16 pb-16 gap-y-8 ">
            <div className="flex flex-col">
              <h2 className="text-md font-dosis font-semibold">
                FRUIT & VEGETABLES
              </h2>
              <div className="flex flex-col gap-1 text-sm mt-4">
                <p>Fresh Vegetables</p>
                <p>Herbs & Seasonings</p>
                <p>Fresh Fruits</p>
                <p>Cuts & Sprouts</p>
                <p>Exotic Fruits & Veggies</p>
                <p>Packaged Produce</p>
                <p>Party Trays</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-dosis font-semibold">
              BREAKFAST & DAIRY
              </h2>
              <div className="flex flex-col gap-1 text-sm mt-4">
                <p>Milk & Flavoured Milk</p>
                <p>Butter and Margarine</p>
                <p>Cheese</p>
                <p>Eggs Substitutes</p>
                <p>Marmalades</p>
                <p>Sour Cream and Dips</p>
                <p>Yogurt</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-dosis font-semibold">
              MEAT & SEAFOOD
              </h2>
              <div className="flex flex-col gap-1 text-sm mt-4">
                <p>Breakfast Sausage</p>
                <p>Dinner Sausage</p>
                <p>Beef</p>
                <p>Chicken</p>
                <p>Sliced Deli Meat</p>
                <p>Shrimp</p>
                <p>Wild Caught Fillets</p>
                <p>Crab and Shellfish</p>
                <p>Farm Raised Fillets</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-dosis font-semibold">
              BEVERAGES
              </h2>
              <div className="flex flex-col gap-1 text-sm mt-4">
                <p>Water</p>
                <p>Sparkling Water</p>
                <p>Soda & Pop</p>
                <p>Coffee</p>
                <p>Milk & Plant-Based Milk</p>
                <p>Tea & Kombucha</p>
                <p>Drink Boxes & Pouches</p>
                <p>Craft Beer</p>
                <p>Wine</p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-md font-dosis font-semibold">
                BREADS & BAKERY
              </h2>
              <div className="flex flex-col gap-1 text-sm mt-4">
                <p>Milk & Flavoured Milk</p>
                <p>Butter and Margarine</p>
                <p>Cheese</p>
                <p>Eggs Substitutes</p>
                <p>Honey</p>
                <p>Marmalades</p>
                <p>Sour Cream and Dips</p>
                <p>Yogurt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-[15px] mx-auto py-16 border-b">
        <div className="w-full flex items-center justify-between flex-wrap gap-y-8">
          <div className="flex items-center">
            <div className="border rounded-full p-2">
              <img src="/svgs/phone-call.svg" alt="phone-call.svg" className="w-6 h-6" />
            </div>
            <div className="flex flex-col ml-4">
              <h1 className="font-bold text-2xl">8 800 555-55</h1>
              <p className="font-semibold text-xs text-muted-foreground">Working 8:00 - 22:00</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col lg:text-end">
            <h2 className="font-bold text-sm">Download App on Mobile :</h2>
            <p className="text-xs">15% discount on your first purchase</p>
          </div>
         <div className="flex gap-2 items-center">
         <button className="flex items-center bg-black rounded-md px-4 py-2">
            <img src="/svgs/chplay.svg" alt="chplay-icon" className="w-6 h-6" />
            <div className="flex flex-col text-white items-start ml-2">
              <p className="text-[10px] leading-3">GET IT ON</p>
              <p className="text-xs font-bold">Google Play</p>
            </div>
          </button>
          <button className="flex items-center bg-black rounded-md px-4 py-2">
            <img src="/svgs/apple.svg" alt="apple-icon" className="w-6 h-6" />
            <div className="flex flex-col text-white items-start ml-2">
              <p className="text-[10px] leading-3">download on the</p>
              <p className="text-xs font-bold">App Store</p>
            </div>
          </button>
         </div>
        </div>
        </div>
      </div>
      <div className="w-full max-w-[1200px] px-[15px] mx-auto py-4">
        <p className="text-xs text-muted-foreground">Copyright 2024 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>
      </div>
    </footer>
  );
}
