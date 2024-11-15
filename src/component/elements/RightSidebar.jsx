import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import IconNavLink from './IconNavLink'

const RightSidebar = () => {
    const sdfgref = useRef([])
    const onMouseEnterHandler = (e) => {
        console.log(sdfgref)
        sdfgref.current.forEach(elem=>{
            elem.classList.replace('opacity-0', 'opacity-100')
            elem.classList.replace('right-[80%]', 'right-0')
        })
     }
    const onMouseLeaveHandler = (e) => { 
        sdfgref.current.forEach(elem=>{
            elem.classList.replace('opacity-100', 'opacity-0')
            elem.classList.replace('right-0', 'right-[80%]')
        })
    }
  return (
    <div className='w-[100px] h-screen md:flex hidden items-center flex-col py-10'>
        <Link><img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="Logo"/></Link>
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className='flex items-center flex-col gap-8 mt-16 w-full'>
            <IconNavLink ref={(el)=>sdfgref.current[0] = el} to={'/account/myProfile'} icon={'ri-account-circle-fill'}/>
            <IconNavLink ref={(el)=>sdfgref.current[0] = el} to={'/explore'} icon={'ri-search-line'}/>
            <IconNavLink ref={(el)=>sdfgref.current[0] = el} to={'/'} icon={'ri-home-line'}/>
            <IconNavLink ref={(el)=>sdfgref.current[0] = el} to={'/shows'} icon={'ri-tv-line'}/>
            <IconNavLink ref={(el)=>sdfgref.current[0] = el} to={'/movies'} icon={'ri-movie-2-line'}/>
            <IconNavLink ref={(el)=>sdfgref.current[0] = el} to={'/sports'} icon={'ri-golf-ball-line'}/>
            <IconNavLink ref={(el)=>sdfgref.current[0] = el} to={'/categories'} icon={'ri-function-add-line'}/>
        </div>
    </div>
  )
}

export default RightSidebar
