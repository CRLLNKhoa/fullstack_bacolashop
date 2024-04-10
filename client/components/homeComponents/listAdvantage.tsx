import React from "react";

export default function ListAdvantage() {
  return (
    <div className="flex flex-col border w-[270px] rounded-lg">
      <div className="p-6 flex items-center text-xs">
        <div className="w-1/3"><img className="w-8 h-8" src="/svgs/mobiledownload.svg" alt="icon_svg" /></div>
        <p className="leading-4">Tải ứng dụng Bacola về điện thoại của bạn.</p>
      </div>
      <div className="p-6 flex items-center text-xs border-y">
        <div className="w-1/3"><img className="w-8 h-8" src="/svgs/safe.svg" alt="icon_svg" /></div>
        <p className="leading-4">Hãy đặt hàng ngay để không bỏ lỡ cơ hội.</p>
      </div>
      <div className="p-6 flex items-center text-xs">
        <div className="w-1/3"><img className="w-8 h-8" src="/svgs/clock.svg" alt="icon_svg" /></div>
        <p className="leading-4">Đơn hàng của bạn sẽ đến tận nhà sau 15 phút.</p>
      </div>
    </div>
  );
}
