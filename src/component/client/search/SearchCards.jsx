import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchCard from './SearchCard'

const SearchCards = () => {
  return (
    <div className='w-full bg-[#0F1014] relative'>
      <div className='flex items-center justify-between md:pr-5 pr-2 md:pl-0 sm:pl-4 pl-2 relative mt-3 z-30'>
        <h1 className='md:font-bold font-semibold text-slate-200 md:text-xl text-lg px-3'>Trending in India</h1>
      </div>
      <div className='w-full py-2 grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-3'>
        
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>
        <SearchCard/>

      </div>
    </div>
  )
}

export default SearchCards
