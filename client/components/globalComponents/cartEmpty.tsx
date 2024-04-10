import React from 'react'

export default function CartEmpty() {
  return (
    <div className="hidden opacity-0 z-50 bg-white group-hover:flex group-hover:opacity-100 w-[274px] h-[256px] absolute right-0 top-[50px] px-4 border shadow-lg rounded-lg flex-col">
        <div className='flex-col flex items-center justify-center flex-1'>
            <div className='w-[62px] h-[62px] bg-[#EAECEF] rounded-full flex items-end justify-center overflow-hidden'>
                <img  className="w-[42px] h-[42px]" src="/svgs/cart-empty.svg" alt="empty-cart" />
            </div>
            <p className='text-sm mt-2 text-center'>Chưa có sản phẩm nào trong giỏ hàng!</p>
        </div>
        <div className='border-t py-4'>
            <p className='text-xs text-center'>Chúng tôi giảm giá vận chuyển xuống chỉ còn 15K!</p>
        </div>
      </div>
  )
}
