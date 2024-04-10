import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";

export default function ListCategories({ show }: { show: boolean }) {
  const [menuSelected, setMenuSelected] = useState<number>(0);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className={cn(
          "border flex flex-col z-50 min-w-[270px] absolute bg-white text-black top-[100%] left-0 translate-y-4 border-t duration-500"
        )}
      >
        <div className="flex flex-col text-sm font-dosis py-4">
          <div
            onMouseEnter={() => setMenuSelected(1)}
            onMouseLeave={() => setMenuSelected(0)}
            className=" flex items-center justify-between py-3 px-6 cursor-pointer group duration-500"
          >
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/fruit.svg" alt="icons" />
              <p className="group-hover:text-background-second">
              Trái cây & Rau quả
              </p>
            </div>
            <VscChevronRight className="group-hover:text-background-second" />
            {menuSelected === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-[100%] w-full h-full top-0 right-0 bottom-0 border-r border-b p-4 pt-7 flex flex-col gap-4 border-l bg-white"
              >
                <p className="hover:text-background-second">Hạt giống & Mầm</p>
                <p className="hover:text-background-second">
                Trái cây & Rau lạ
                </p>
                <p className="hover:text-background-second">Trái cây tươi</p>
                <p className="hover:text-background-second">Rau sạch</p>
                <p className="hover:text-background-second">
                Thảo dược & Gia vị
                </p>
                <p className="hover:text-background-second">Sản phẩm đóng gói</p>
                <p className="hover:text-background-second">Khay tiệc</p>
              </motion.div>
            )}
          </div>
          <div className="flex items-center justify-between py-3 px-6 cursor-pointer hover:text-background-second duration-500">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/meat.svg" alt="icons" />
              <p>Thịt & Hải Sản</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 px-6 cursor-pointer hover:text-background-second duration-500">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/breakfast.svg" alt="icons" />
              <p>Bữa sáng & Sữa</p>
            </div>
          </div>
          <div
            onMouseEnter={() => setMenuSelected(2)}
            onMouseLeave={() => setMenuSelected(0)}
            className="flex items-center justify-between py-3 px-6 cursor-pointer group duration-500"
          >
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/beverages.svg" alt="icons" />
              <p className="group-hover:text-background-second">Đồ uống</p>
            </div>
            <VscChevronRight className="group-hover:text-background-second" />
            {menuSelected === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-[100%] w-full h-full top-0 right-0 bottom-0 border-r border-b p-4 pt-7 flex flex-col gap-4 border-l bg-white"
              >
                <p className="hover:text-background-second">Coffee</p>
                <p className="hover:text-background-second">Craft Beer</p>
                <p className="hover:text-background-second">Drink Boxes & Pouches</p>
                <p className="hover:text-background-second">Milk & Plant-Based Milk</p>
                <p className="hover:text-background-second">Soda & Pop</p>
                <p className="hover:text-background-second">Sparkling Water</p>
                <p className="hover:text-background-second">Tea & Kombucha</p>
                <p className="hover:text-background-second">Water</p>
                <p className="hover:text-background-second">Wine</p>
              </motion.div>
            )}
          </div>
          <div className="flex items-center justify-between py-3 px-6 cursor-pointer hover:text-background-second duration-500">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/bakery.svg" alt="icons" />
              <p>Bánh mì & Bánh ngọt</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 px-6 cursor-pointer hover:text-background-second duration-500">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/frozen.svg" alt="icons" />
              <p>Thực phẩm đông lạnh</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 px-6 cursor-pointer hover:text-background-second duration-500">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/candy.svg" alt="icons" />
              <p>Bánh quy & đồ ăn nhẹ</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 px-6 cursor-pointer hover:text-background-second duration-500">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src="/svgs/seed.svg" alt="icons" />
              <p>Tạp hóa & Mặt hàng chủ lực</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-sm py-4 border-t px-6 gap-1">
          <p>Bán chạy trong ngày</p>
          <p>100 ưu đãi hàng đầu</p>
          <p>Sản phẩm mới nhất</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
