import React from 'react'
import AccountTopbar from './AccountTopbar'

const Transactions = () => {
  return (
    <div className='w-full h-full'>
        <AccountTopbar title={'My Transactions'}/>
        <div className='w-full h-[calc(100%-56px)] bg-red-400 p-3'>
          
        </div>
    </div>
  )
}

export default Transactions
