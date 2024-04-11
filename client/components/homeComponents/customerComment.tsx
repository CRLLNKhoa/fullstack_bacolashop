import React from "react";

export default function CustomerComment() {
  return (
    <div className="flex flex-col w-[270px]">
      <h1 className="text-xl font-semibold font-dosis mb-4">
        Bình Luận Của Khách Hàng
      </h1>
      <div className="flex flex-col mt-2 bg-orange-100/60 p-6 rounded-lg">
        <div className="flex flex-col border-b">
          <div className="flex items-center">
            <div className="size-[46px] bg-black rounded-full">
              <img
                className="w-full h-full rounded-full"
                src="https://s120-ava-talk.zadn.vn/5/0/c/7/101/120/c9936b55710e1e0809373a425e2557fb.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col ml-4">
              <h2 className="line-clamp-1 font-semibold leading-4">
              Lương Khoa
              </h2>
              <p className="line-clamp-1 text-xs text-muted-foreground">
                Khách hàng thân thiết
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-2 font-dosis font-semibold pb-4">
            <h1>Cửa hàng quá chất lượng</h1>
            <p className="line-clamp-3 text-sm text-muted-foreground leading-4">
              Thực phẩm tưới mới chất lượng 5 sao.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center">
            <div className="size-[46px] bg-black rounded-full">
              {" "}
              <img
                className="w-full h-full rounded-full"
                src="https://s120-ava-talk.zadn.vn/5/0/c/7/101/120/c9936b55710e1e0809373a425e2557fb.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col ml-4">
              <h2 className="line-clamp-1 font-semibold leading-4">
                Lương Khoa
              </h2>
              <p className="line-clamp-1 text-xs text-muted-foreground">
                Khách hàng thân thiết
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-2 font-dosis font-semibold pb-2">
            <h1>Thực phẩm tươi mới</h1>
            <p className="line-clamp-3 text-sm text-muted-foreground leading-4">
              Giao hàng nhanh sản phẩm chất lượng, không có gì để chê
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
