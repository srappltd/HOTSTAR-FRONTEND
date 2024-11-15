import React from 'react'
import { Link } from 'react-router-dom'
import 'swiper/css';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SliderVIdeos = () => {
  return (
    <div className='w-full bg-[#0F1014] top-0 relative '>
      <div className='flex items-center justify-between md:pr-5 pr-2 md:pl-0 sm:pl-4 pl-2 relative top-4 z-30'>
        <h1 className='font-bold text-slate-200 md:text-2xl text-lg'>Latest Release</h1>
        <Link className='font-semibold md:text-base text-slate-200 text-xs'>View All <i className="ri-arrow-right-wide-line z-40"></i></Link>
      </div>
      <Swiper spaceBetween={10} keyboard={true} modules={[Navigation, Keyboard]} breakpoints={{ 320: { slidesPerView: 2, spaceBetween: 10 }, 450: { slidesPerView: 2, spaceBetween: 10 }, 580: { slidesPerView: 3, spaceBetween: 10 }, 740: { slidesPerView: 4, spaceBetween: 10 }, 1140: { slidesPerView: 5, spaceBetween: 7 }, 940: { slidesPerView: 5, spaceBetween: 9 } }} pagination={{ clickable: true }} className='w-full py-5 flex gap-2 md:pr-4 pr-2 md:pl-4 pl-2'>
        <SwiperSlide className='card transition-all w-[350px] cursor-pointer hover:scale-[1.05] relative hover:z-30 overflow-hidden'>
          <Link>
            <img src="https://akamaividz2.zee5.com/image/upload/w_396,h_224,c_scale,f_webp,q_auto:eco/resources/0-1-6z5590671/list/000002102c06cb26d059460cbf88ef4c3700e5e3.jpg" className='h-full w-full object-cover md:rounded-lg rounded' alt="" />
            <div className='w-full py-[6px]'>
              <h1 className='line-clamp-1 font-medium md:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus aspernatur, molestias autem in, possimus cumque at aliquam beatae accusantium quidem laudantium ut aperiam iusto alias eos, commodi asperiores eligendi.</h1>
              <div className='flex items-center gap-2 font-medium text-xs text-slate-400'>
                <span>E1923</span> •
                <span>21m</span> •
                <span>13 Jul</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all w-[350px] cursor-pointer hover:scale-[1.05] relative hover:z-30 overflow-hidden'>
          <Link>
            <img src="https://akamaividz2.zee5.com/image/upload/w_396,h_224,c_scale,f_webp,q_auto:eco/resources/0-1-6z5590671/list/000002102c06cb26d059460cbf88ef4c3700e5e3.jpg" className='h-full w-full object-cover md:rounded-lg rounded' alt="" />
            <div className='w-full py-[6px]'>
              <h1 className='line-clamp-1 font-medium md:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus aspernatur, molestias autem in, possimus cumque at aliquam beatae accusantium quidem laudantium ut aperiam iusto alias eos, commodi asperiores eligendi.</h1>
              <div className='flex items-center gap-2 font-medium text-xs text-slate-400'>
                <span>E1923</span> •
                <span>21m</span> •
                <span>13 Jul</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all w-[350px] cursor-pointer hover:scale-[1.05] relative hover:z-30 overflow-hidden'>
          <Link>
            <img src="https://akamaividz2.zee5.com/image/upload/w_396,h_224,c_scale,f_webp,q_auto:eco/resources/0-1-6z5590671/list/000002102c06cb26d059460cbf88ef4c3700e5e3.jpg" className='h-full w-full object-cover md:rounded-lg rounded' alt="" />
            <div className='w-full py-[6px]'>
              <h1 className='line-clamp-1 font-medium md:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus aspernatur, molestias autem in, possimus cumque at aliquam beatae accusantium quidem laudantium ut aperiam iusto alias eos, commodi asperiores eligendi.</h1>
              <div className='flex items-center gap-2 font-medium text-xs text-slate-400'>
                <span>E1923</span> •
                <span>21m</span> •
                <span>13 Jul</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all w-[350px] cursor-pointer hover:scale-[1.05] relative hover:z-30 overflow-hidden'>
          <Link>
            <img src="https://akamaividz2.zee5.com/image/upload/w_396,h_224,c_scale,f_webp,q_auto:eco/resources/0-1-6z5590671/list/000002102c06cb26d059460cbf88ef4c3700e5e3.jpg" className='h-full w-full object-cover md:rounded-lg rounded' alt="" />
            <div className='w-full py-[6px]'>
              <h1 className='line-clamp-1 font-medium md:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus aspernatur, molestias autem in, possimus cumque at aliquam beatae accusantium quidem laudantium ut aperiam iusto alias eos, commodi asperiores eligendi.</h1>
              <div className='flex items-center gap-2 font-medium text-xs text-slate-400'>
                <span>E1923</span> •
                <span>21m</span> •
                <span>13 Jul</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all w-[350px] cursor-pointer hover:scale-[1.05] relative hover:z-30 overflow-hidden'>
          <Link>
            <img src="https://akamaividz2.zee5.com/image/upload/w_396,h_224,c_scale,f_webp,q_auto:eco/resources/0-1-6z5590671/list/000002102c06cb26d059460cbf88ef4c3700e5e3.jpg" className='h-full w-full object-cover md:rounded-lg rounded' alt="" />
            <div className='w-full py-[6px]'>
              <h1 className='line-clamp-1 font-medium md:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus aspernatur, molestias autem in, possimus cumque at aliquam beatae accusantium quidem laudantium ut aperiam iusto alias eos, commodi asperiores eligendi.</h1>
              <div className='flex items-center gap-2 font-medium text-xs text-slate-400'>
                <span>E1923</span> •
                <span>21m</span> •
                <span>13 Jul</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className='card transition-all w-[350px] cursor-pointer hover:scale-[1.05] relative hover:z-30 overflow-hidden'>
          <Link>
            <img src="https://akamaividz2.zee5.com/image/upload/w_396,h_224,c_scale,f_webp,q_auto:eco/resources/0-1-6z5590671/list/000002102c06cb26d059460cbf88ef4c3700e5e3.jpg" className='h-full w-full object-cover md:rounded-lg rounded' alt="" />
            <div className='w-full py-[6px]'>
              <h1 className='line-clamp-1 font-medium md:text-base text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ducimus aspernatur, molestias autem in, possimus cumque at aliquam beatae accusantium quidem laudantium ut aperiam iusto alias eos, commodi asperiores eligendi.</h1>
              <div className='flex items-center gap-2 font-medium text-xs text-slate-400'>
                <span>E1923</span> •
                <span>21m</span> •
                <span>13 Jul</span>
              </div>
            </div>
          </Link>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default SliderVIdeos
