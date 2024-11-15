import React from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderDiv = () => {
  return (
    <div className='w-full bg-[#0F1014] top-0 relative '>
      <div className='flex items-center justify-between md:pr-5 pr-2 md:pl-0 sm:pl-4 pl-2 relative top-4 z-30'>
        <h1 className='font-bold text-slate-200 md:text-2xl text-lg'>Latest Release</h1>
        <Link className='font-semibold md:text-base text-slate-200 text-xs'>View All <i className="ri-arrow-right-wide-line z-40"></i></Link>
      </div>
      <Swiper spaceBetween={10}
        keyboard={true} modules={[Navigation, Keyboard]} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 10 }, 450: { slidesPerView: 2, spaceBetween: 10 }, 580: { slidesPerView: 3, spaceBetween: 10 }, 740: { slidesPerView: 4, spaceBetween: 10 }, 1140: { slidesPerView: 7, spaceBetween: 9 }, 940: { slidesPerView: 5, spaceBetween: 9 } }} pagination={{ clickable: true }} className='w-full py-5 flex gap-2 md:pr-4 pr-2 md:pl-4 pl-4'>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all cursor-pointer hover:scale-[1.05] relative hover:z-30 rounded-lg md:h-[260px] h-[230px] overflow-hidden'>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderDiv
