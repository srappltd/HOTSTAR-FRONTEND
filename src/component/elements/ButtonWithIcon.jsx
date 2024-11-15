import React from 'react'

const ButtonWithIcon = ({title,icon,onClick,borderColor,textSize,px}) => {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 py-[6px] ${px || 'md:px-5 px-3'} ${borderColor || 'border-slate-700'} bg-slate-950 cursor-pointer border rounded ${ textSize || 'text-xs md:text-sm font-medium'}`}>
        {icon && <i class={icon}></i>}
        {title}
        </button>
  )
}

export default ButtonWithIcon
