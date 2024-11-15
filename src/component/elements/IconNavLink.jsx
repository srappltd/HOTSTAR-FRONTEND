import React from 'react'
import {NavLink} from 'react-router-dom'

const IconNavLink = ({to,title,icon,ref}) => {
  return (
    <NavLink to={to} className='flex items-center gap-3 relative text-zinc-400 hover:text-white' style={(e)=>e.isActive ? {color:"white"} : {} }>
      <span className='text-xl overflow-hidden z-50 relative'><i className={icon}></i></span> 
      {title && <span ref={ref} className='sliderText transition-all duration-500 font-bold text-lg'>{title}</span>}
    </NavLink>
  )
}

export default IconNavLink
