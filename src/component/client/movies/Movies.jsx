import React from 'react'
import SliderDiv from './SliderDiv'
import BackButton from '../../elements/BackButton'


const Movies = () => {
  document.title = 'Hotstar - Sports'
  return (
    <div className='w-full'>
      {/* // back cover page top  */}
      <div className='w-full h-screen fixed'>
        <video src="" poster='https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/2166/1372166-i-5c95ffcc7d82' className='w-full h-full object-cover'></video>
      </div>
      {/* // cover page top  */}
      <div className='w-full h-[90vh] px-3 md:bg-gradient-to-r bg-gradient-to-t md:pb-10 pb-5 md:pr-10 md:from-[7%] from-[15%] flex flex-col justify-end from-[#0F1014] to-[40%] to-[#00000037] top-0 relative '>
        <BackButton/>
        <div className=''>
          <img src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/2168/1372168-t-4e6abd2cad09" className='md:w-[15%] w-[60%]' alt="" />
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
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/9092/1720972679092-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/9491/1720972849491-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/6804/1720885216804-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/1994/1720884801994-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/2657/1720884602657-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/4459/1719689554459-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              <img src="https://img10.hotstar.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/3124/1711159603124-h" className='md:h-[7vh] h-[6vh] rounded hover:scale-110 transition-all duration-300 cursor-pointer' alt="" />
              
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

      <SliderDiv/>
      
      

      
      
    </div>
  )
}

export default Movies
