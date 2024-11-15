import React from 'react'

const FieldsetInput = ({label,name,type,onChange,placeholder,value}) => {
    return (
        <fieldset className='border rounded border-slate-600 transition-all hover:border-2'>
            {label && <legend className='font-medium text-xs ml-3 text-slate-400 px-1'>{label}</legend>}
            <input type={type || "text"} name={name} value={value} className='md:py-2 py-[6px] px-3 w-full bg-inherit outline-none' placeholder={placeholder} onChange={onChange} />
        </fieldset>
    )
}

export default FieldsetInput
