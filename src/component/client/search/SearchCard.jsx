import React from 'react'
import { Link } from 'react-router-dom'

const SearchCard = () => {
    
  return (
    <div className='searchCard transition-all cursor-pointer hover:scale-[1.02] relative hover:z-30 md:rounded-lg rounded md:h-[260px] h-[260px] overflow-hidden' style={{}}>
          <Link>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_3840/sources/r1/cms/prod/2915/1720462162915-v" className='h-full w-full object-cover' alt="" />
          </Link>
            <div className='searchCardCenter -bottom-full w-full p-2 absolute backdrop-blur-lg transition-all duration-500'>
                <h1 className='font-semibold mix-blend-difference uppercase text-xs line-clamp-1'>Commander karan saxena</h1>
                <div className='flex items-center justify-between w-full p-1'>
                    <div className='flex items-center gap-2'>
                        <span className='text-slate-300 font-medium text-xs'>Action / Drama</span>
                        <span className='text-slate-300 font-medium text-xs'>2021</span>
                    </div>
                    <span><i class="ri-heart-2-line text-xl cursor-pointer"></i></span>
                </div>
            </div>
        </div>
  )
}

export default SearchCard
