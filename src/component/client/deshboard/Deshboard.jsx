import React, { useEffect, useRef, useState } from 'react'
import SliderDiv from './SliderDiv'
import SliderVIdeos from '../../elements/SliderVIdeos'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useSelector } from 'react-redux'
import Loading from '../../elements/Loading'
gsap.registerPlugin(ScrollTrigger)



const Deshboard = () => {
  document.title = 'Hotstar - Deshboard'
  const { category } = useSelector(state => state.AuthReducer)
  const [categories, setCateogries] = useState(category ? category : [])
  useEffect(() => {
    category && setCateogries(category)
  }, [category])
  return (
    <div className='w-full relative'>
      {/* // back cover page top  */}
      <div className='w-full h-screen fixed'>
        <video src="" poster='https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/4715/1711159654715-i' className='w-full h-full object-cover'></video>
      </div>
      {/* // cover page top  */}
      <div className='w-full h-[90vh] px-3 md:bg-gradient-to-r bg-gradient-to-t md:pb-10 pb-5 md:pr-10 md:from-[7%] from-[15%] flex flex-col justify-end from-[#0F1014] to-[40%] to-[#00000037] top-0 relative '>
        <div className=''>
          <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/346/1720718500346-t" className='md:w-[25%] w-[60%]' alt="" />
          <div className='flex items-center gap-3 font-medium text-base mt-4'>
            <span>2024</span> • <span>Hindi</span> • <span className='py-[2px] rounded px-3 bg-zinc-500 text-xs'>U/A 16+</span>
          </div>
          <p className='md:w-[25%] md:mb-0 mb-5 w-full mt-4 text-slate-300 line-clamp-3'>Circumstances force Meena, a family-centric girl, to marry Muthu, a thug. Will this unfortunate marriage turn into love?</p>
          <div className='flex items-center gap-3 font-medium md:mt-8 mt-4 md:mb-7 pb-5 md:text-base text-xs'>
            <span>Drama</span> | <span>Teen</span> | <span>Daily soap Fans</span> | <span>Social Issues</span>
          </div>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-2'>
          <div className='flex items-center gap-4 md:text-lg  text-sm font-medium w-full justify-center md:justify-start'>
            <button className='bg-[#ded7d22c] py-2 px-10 md:w-fit w-full backdrop-blur md:rounded-md rounded capitalize '>Subscribe to watch</button>
            <button className='bg-[#ded7d22c] py-2 px-4 backdrop-blur md:rounded-md rounded capitalize'><i className="ri-add-large-line"></i></button>
          </div>
          <div className='relative md:w-3/4 w-full ml-auto md:bg-gradient-to-l to-[10%] md:from-[#000000d0]'>
            <div className='flex items-center gap-2 flex-shrink-0 relative z-10 md:h-[8vh] h-[7vh] md:px-4 overflow-x-auto'>
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6770/1720782246770-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3415/1714373513415-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3124/1711159603124-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5846/1719590015846-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/1934/1712749861934-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3415/1714373513415-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3124/1711159603124-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5846/1719590015846-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/1934/1712749861934-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />

            </div>
            <div className='w-full pointer-events-none h-full z-50 absolute top-0 text-3xl left-0 flex items-center justify-between'>
              <div className='leftArrow cursor-pointer px-1'>
                <i className="ri-arrow-left-s-line"></i>
              </div>
              <div className='rightArrow cursor-pointer px-1 '>
                <i className="ri-arrow-right-s-line"></i>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full bg-[#0F1014]'>
        <SliderVIdeos />
        {categories.length > 0 ? categories.map((category, index) => (
          <SliderDiv key={index} category={category} />
        )) : <Loading />}
      </div>





    </div>
  )
}

export default Deshboard
