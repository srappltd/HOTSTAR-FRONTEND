import React from 'react'
import AccountTopbar from './AccountTopbar'

const Rentals = () => {
  return (
    <div className='w-full h-full'>
      <AccountTopbar title={'My Rentals'} />
      <div className='w-full h-[calc(100%-56px)] p-3 relative'>
        <div className='w-full md:w-fit flex items-center justify-center absolute md:text-lg text-sm font-semibold flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='md:w-[150px] w-[100px] md:h-[150px] h-[100px] bg-[#131419] shadow-xl shadow-[#17171d] rounded-full flex items-center justify-center'>
            <i class="ri-emotion-sad-line md:text-8xl text-6xl"></i>

          </div>
          <span className='text-center w-[80%] md:leading-[1.2] leading-[1.5] mt-5'>You have not rented any content yet Rent from our ZEEPLEX Collection and start watching</span>
        </div>
      </div>
    </div>
  )
}

export default Rentals
