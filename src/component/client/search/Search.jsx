import React from 'react'
import SearchCards from './SearchCards'


const Search = () => {
  document.title = 'Hotstar - Explore'
  return (
    <div className='w-full h-screen'>
      <div className='w-[calc(100%-24px)] ml-3 md:h-12 h-10 md:rounded-md rounded-sm bg-[#252833] px-5 md:mt-10 mt-5 flex items-center gap-5'>
        <span><i class="ri-search-2-line md:text-xl text-base"></i></span>
        <input type="text" className='w-full h-full bg-inherit outline-none font-medium md:text-lg text-sm tracking-wider' placeholder='Movies, shows & more' />
      </div>
      <SearchCards />
    </div>
  )
}

export default Search
