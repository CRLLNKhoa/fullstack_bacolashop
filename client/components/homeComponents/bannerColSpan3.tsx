import React from 'react'

type BannerProps = {
    img: string,
    line1: string,
    line2: string,
    line3: string,
    price: string
}

export default function BannerColSpan3(props:BannerProps) {
  return (
    <div className='h-[400px] w-[270px] relative rounded-lg overflow-hidden p-8'>
        <img className='absolute top-0 bottom-0 left-0 right-0 -z-10' src={props.img} alt="banner" />
        <div className='flex flex-col'>
            <p className='text-sm mb-2'>{props.line1}</p>
            <h2 className='text-2xl'>{props.line2}</h2>
            <h2 className='text-2xl font-bold'>{props.line3}</h2>
            <p className='text-xs mt-2'>Giá chỉ từ</p>
            <h1 className='font-dosis text-red-500 text-3xl font-bold'>${props.price}</h1>
        </div>
    </div>
  )
}
