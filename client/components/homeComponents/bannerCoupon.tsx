import Link from 'next/link'
import React from 'react'

export default function BannerCoupon() {
  return (
    <Link href={"/"} className='bg-[#FFEEF2] flex items-center justify-center text-red-500 px-4 py-6 rounded-lg'>
        <p className='text-md'>Siêu giảm giá cho bạn <b className='underline'>lần mua đầu tiên</b>.</p>
        <span className='px-4 py-1 border border-dashed border-red-500 
        font-dosis rounded-full font-semibold ml-2'>FREE25BAC</span>
    </Link>
  )
}
