import React from 'react'

export default function BannerColSpan9() {
  return (
    <div className='relative p-8 overflow-hidden flex items-center h-[126px] bg-[#F8EFEA] rounded-lg'>
        <img className='absolute right-0 top-1/2 -translate-y-1/2' src="/imgs/banner-box2.jpg" alt="banner" />
        <div className='w-[60%] flex flex-col z-10'>
            <p className='text-muted-foreground text-sm'>Luôn quan tâm</p>
            <h2 className='font-bold text-lg text-muted-foreground line-clamp-2 leading-5'>Tại cửa hàng hoặc trực tuyến, sức khỏe và sự an toàn của bạn là ưu tiên hàng đầu.</h2>
        </div>
    </div>
  )
}
