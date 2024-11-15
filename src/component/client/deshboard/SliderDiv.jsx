import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useSelector } from 'react-redux';
import { baseUrl } from '../../../utils/Axios';

const SliderDiv = ({category}) => {
  return (
    <>
    {category.items.length > 0 &&
    <div className='w-full bg-[#0F1014] top-0 relative '>
      <div className='flex items-center justify-between md:pr-5 pr-2 md:pl-0 sm:pl-4 pl-2 relative top-4 z-30'>
        <h1 className='font-bold text-slate-200 md:text-2xl text-lg'>{category && category.title}</h1>
        <Link to={`/viewall/:${category && category._id}`} className='font-semibold md:text-base text-slate-200 text-xs'>View All <i className="ri-arrow-right-wide-line z-40"></i></Link>
      </div>
      <Swiper spaceBetween={10}
        keyboard={true} modules={[Navigation, Keyboard]} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 10 }, 450: { slidesPerView: 2, spaceBetween: 10 }, 580: { slidesPerView: 3, spaceBetween: 10 }, 740: { slidesPerView: 4, spaceBetween: 10 }, 1140: { slidesPerView: 7, spaceBetween: 9 }, 940: { slidesPerView: 5, spaceBetween: 9 } }} pagination={{ clickable: true }} className='w-full py-5 flex gap-2 md:pr-4 pr-2 md:pl-4 pl-4'>
          {
            category.items.length > 0 && category.items.slice(category.items.length - 10,category.items.length).map((item,index)=>(
              <SwiperSlide key={index} className='card searchCard transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
                <Link to={`/detail/${category && item._id}`}>
                  <img src={category && `${baseUrl+item.poster}`} className='h-full w-full object-cover' alt="" />
                </Link>
                <div className='searchCardCenter -bottom-full w-full p-2 absolute backdrop-blur-lg transition-all duration-500'>
                <h1 className='font-semibold mix-blend-difference uppercase text-xs line-clamp-1'>{category && item.title}</h1>
                <div className='flex items-center justify-between w-full p-1'>
                    <div className='flex items-center gap-2'>
                        <span className='text-slate-300 font-medium text-xs'>Action / Drama</span>
                        <span className='text-slate-300 font-medium text-xs'>{category && item?.release ? item?.release : '2020'}</span>
                    </div>
                    <span><i class="ri-heart-2-line text-xl cursor-pointer"></i></span>
                </div>
            </div>
              </SwiperSlide>
            )).reverse()
          }
      </Swiper>
    </div>}
    </>
  )
}

export default SliderDiv
