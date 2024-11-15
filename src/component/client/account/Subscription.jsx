import React from 'react'
import AccountTopbar from './AccountTopbar'

const Subscription = () => {
  return (
    <div className='w-full h-full'>
        <AccountTopbar title={'My Subscription'}/>
        <div className='w-full h-[calc(100%-56px)] md:p-3 p-1 relative'>
          <div className='flex items-center justify-center absolute md:text-2xl text-base font-semibold flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <i class="ri-rss-line md:text-8xl text-6xl"></i>
            No Active Subscription
          </div>
        </div>
    </div>
  )
}

export default Subscription
