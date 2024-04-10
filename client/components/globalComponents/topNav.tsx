import Link from "next/link";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function TopNav() {
  return (
    <nav className="w-full border-b hidden lg:block">
      <div className="w-full max-w-[1200px] px-[15px] h-10 mx-auto flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <Link
            className="hover:text-background-second duration-300"
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="hover:text-background-second duration-300"
            href="/account"
          >
            Tài khoản
          </Link>
          <Link
            className="hover:text-background-second duration-300"
            href="/wishlist"
          >
            Yêu thích
          </Link>
          <Link
            className="hover:text-background-second duration-300"
            href="/order-tracking"
          >
            Đơn hàng
          </Link>
        </div>
        <div className="flex items-center h-full border-r pr-2 ml-auto mr-4">
          <div className="flex items-center gap-2 border-r pr-2">
            <img
              src="/svgs/secure.svg"
              alt="secure-icon"
              className="w-5 h-5 opacity-80"
            />
            <p>Giao hàng an toàn 100% mà không cần liên hệ với người chuyển phát nhanh</p>
          </div>
          <div className="flex items-center ml-2 gap-2">
            <p>Cần giúp đỡ? Gọi cho chúng tôi:</p>
            <a className="font-bold text-background-second" href="tel:+0336284229">
              + 0336 284
            </a>
          </div>
        </div>
        <div className="flex items-center group h-full">
          <div className="flex items-center font-semibold gap-1 relative cursor-pointer">
            <div className="hover:text-background-second flex items-center duration-500">
                <p>English </p>
                <MdKeyboardArrowDown />
            </div>
            <div className="invisible group-hover:visible z-50 bg-white absolute right-0 top-[28px] w-[100px] rounded-b-md p-4 flex flex-col border shadow-lg gap-2">
                <p className="hover:text-background-second text-center">English</p>
                <p className="hover:text-background-second text-center">Việt Nam</p>
            </div>
          </div>
        </div>
        <div className="flex items-center group h-full ml-4">
          <div className="flex items-center font-semibold gap-1 relative cursor-pointer">
            <div className="hover:text-background-second flex items-center duration-500">
                <p>USD </p>
                <MdKeyboardArrowDown />
            </div>
            <div className="invisible group-hover:visible absolute z-50 bg-white right-0 top-[28px] w-[80px] rounded-b-md p-4 flex flex-col border shadow-lg gap-2">
                <p className="hover:text-background-second text-center">USD</p>
                <p className="hover:text-background-second text-center">VNĐ</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
