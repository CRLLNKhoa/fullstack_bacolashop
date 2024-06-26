import React from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/globalComponents/dialogLocation";
import { RiSearchLine } from "react-icons/ri";
import locations from "@/jsons/locations.json";

export default function SelectLocation() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="h-[60px] border px-4 py-2 cursor-pointer hover:shadow-md duration-500 rounded-lg flex items-center gap-4">
          <div className="flex flex-col">
            <p className="text-xs text-muted-foreground">Vị trí của bạn</p>
            <p className="text-sm text-background-primary font-semibold">
            Chọn một vị trí
            </p>
          </div>
          <FaAngleDown className="text-muted-foreground" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chọn địa điểm giao hàng của bạn</DialogTitle>
          <DialogDescription>
          Nhập địa chỉ của bạn và chúng tôi sẽ chỉ định ưu đãi cho khu vực của bạn.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="bg-muted-foreground/20 px-4 py-3 flex items-center gap-2">
            <RiSearchLine className="w-6 h-6 text-muted-foreground" />
            <input
              className="w-full bg-transparent outline-none"
              type="text"
              placeholder="Tìm kiếm khu vực của bạn"
            />
          </div>
          <div className="max-h-[330px] overflow-y-auto">
            {locations?.map((location) => (
              <div key={location.id} className="border-b py-2 pr-2 flex items-center justify-between cursor-pointer group last:border-none">
                <p className="group-hover:text-background-primary font-semibold duration-500">
                  {location.name}
                </p>
                <span className="border px-2 py-1 rounded-full text-xs text-muted-foreground">
                  Min: ${location.min}
                </span>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
