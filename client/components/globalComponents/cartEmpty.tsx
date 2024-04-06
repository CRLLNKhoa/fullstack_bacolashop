import React from 'react'

export default function CartEmpty() {
  return (
    <div className="hidden opacity-0 group-hover:flex group-hover:opacity-100 w-[274px] h-[256px] absolute right-0 top-[50px] px-4 border shadow-lg rounded-lg flex-col">
        <div className='flex-col flex items-center justify-center flex-1'>
            <div className='w-[62px] h-[62px] bg-[#EAECEF] rounded-full flex items-end justify-center overflow-hidden'>
                <img  className="w-[42px] h-[42px]" src="/svgs/cart-empty.svg" alt="empty-cart" />
            </div>
            <p className='text-sm mt-2'>No products in the cart.</p>
        </div>
        <div className='border-t py-4'>
            <p className='text-xs text-center'>We reduce shipping prices to only 2.49$!</p>
        </div>
      </div>
  )
}
