import React from 'react'
import AccountTopbar from './AccountTopbar'

const Devices = () => {
  return (
    <div className='w-full h-full'>
        <AccountTopbar title={'Manage your devices'}/>
        <div className='w-full max-h-[calc(100%-56px)] md:p-3 p-1 grid grid-cols-1'>
          <div className='card w-full md:py-3 py-2 md:px-6 px-3 hover:bg-[#1A1E29] transition-all duration-300 rounded-sm flex items-center gap-6'>
            <span><i class="ri-macbook-line md:text-3xl text-2xl"></i></span>
            <div className='w-full flex flex-col justify-center'>
              <h1 className='font-semibold md:text-lg text-sm'>Web Browser</h1>
              <p className='md:text-sm text-xs text-slate-400'>Last used: 20 Days Ago</p>
            </div>
            <button className='md:py-2 py-1 md:px-4 px-3 border rounded font-medium border-slate-700 hover:border-slate-500 transition-all duration-500 md:text-base text-sm'>Logout</button>
          </div>
          <div className='card w-full md:py-3 py-2 md:px-6 px-3 hover:bg-[#1A1E29] transition-all duration-300 rounded-sm flex items-center gap-6'>
            <span><i class="ri-macbook-line md:text-3xl text-2xl"></i></span>
            <div className='w-full flex flex-col justify-center'>
              <h1 className='font-semibold md:text-lg text-sm'>Web Browser</h1>
              <p className='md:text-sm text-xs text-slate-400'>Last used: 20 Days Ago</p>
            </div>
            <button className='md:py-2 py-1 md:px-4 px-3 border rounded font-medium border-slate-700 hover:border-slate-500 transition-all duration-500 md:text-base text-sm'>Logout</button>
          </div>
          
          
          
        </div>
    </div>
  )
}

export default Devices
