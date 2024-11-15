import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = ({position}) => {
    const navigate = useNavigate(null)
  return (
    <span onClick={()=>navigate(-1)} className={`${position ||'absolute md:top-[50px] top-5 text-4xl'} cursor-pointer z-20`}><i class="ri-arrow-left-s-line"></i></span>
  )
}

export default BackButton
