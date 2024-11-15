import React from 'react'

const Input = ({label,type,onChange,placeholder,name}) => {
  return (
    <div className='w-full flex flex-col'>
      {label && <label htmlFor="" className='font-medium text-sm'>{label}</label>}
      <input type={ type || 'text'} name={name} className='w-full h-10 px-3 bg-inherit border border-slate-700 focus:border-slate-400 outline-none text-white rounded-sm mt-[2px]' onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default Input
