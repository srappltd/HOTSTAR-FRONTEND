import React from 'react'
import AccountTopbar from './AccountTopbar'
import { Link } from 'react-router-dom'
import ButtonWithIcon from '../../elements/ButtonWithIcon'

const Watchlist = () => {
  return (
    <div className='w-full h-full'>
        <AccountTopbar title={'My Watchlist'}/>
        <div className='w-full h-[calc(100%-56px)]'>
          <div className='w-full h-10 border-b bg-[#131419] border-[#22242d] flex items-center gap-7 px-7 font-medium text-blue-500 text-sm tracking-wider'>
            <Link className='font-medium'>Episodes</Link>
            <Link className='font-medium'>Movies</Link>
            <Link className='font-medium'>Videos</Link>
            <Link className='font-medium'>Sports</Link>
          </div>
          <div className='w-full max-h-[calc(100%-40px)] overflow-y-auto overflow-x-hidden grid md:grid-cols-2 grid-cols-1 items-start justify-start gap-4 md:p-3 p-1'>
            <div className='card w-full md:h-[120px] h-[100px] flex gap-2  p-1 rounded shadow-xl shadow-neutral-900'>
              <div className='w-[45%] h-full bg-green-200 rounded overflow-hidden'>
                <img src="https://akamaividz2.zee5.com/image/upload/w_396,h_224,c_scale,f_webp,q_auto:eco/resources/0-1-6z5240065/list/00000233fdf329917c3b4f9eae819941609d3e6f.jpg" className='w-full h-full object-cover' alt="" />
              </div>
              <div className='w-[55%] h-full rounded overflow-hidden flex-col flex justify-between'>
                <h1 className='line-clamp-2 font-medium text-sm leading-[1.2]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, reiciendis. Aliquid iste eius veritatis magni qui voluptas, unde saepe impedit similique rerum labore. Adipisci porro reprehenderit maiores ullam laborum dolorum!</h1>
                <div className='flex items-center justify-between'>
                <div className='flex items-center justify-between gap-2 px-1'>
                  <button className='w-full py-1 px-2 flex items-center bg-blue-400 gap-1 font-medium text-xs border rounded-sm border-blue-500'>
                  <i class="ri-movie-2-line"></i> Watch
                  </button>
                  <button className='w-full py-1 px-2 flex items-center bg-green-500 font-medium gap-1 text-xs line-clamp-1 border rounded-sm border-green-600'>
                  <i class="ri-share-forward-line"></i> Share
                  </button>
                  <button className='w-full py-1 md:flex hidden px-2 items-center bg-red-400 font-medium gap-1 text-xs line-clamp-1 border rounded-sm border-red-500'>
                  <i class="ri-delete-bin-6-line"></i> Remove
                  </button>
                </div>

                <span className='cursor-pointer ml-auto px-1 block md:hidden md:text-base text-lg'><i class="ri-more-2-fill"></i></span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
    </div>
  )
}

export default Watchlist
