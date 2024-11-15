import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import RightSidebar from '../elements/RightSidebar'
import BottomBar from '../elements/BottomBar'

const Layout = () => {
    return (
        <div className='w-full h-screen md:flex'>
            <RightSidebar/>
            <div className='md:w-[calc(100%-100px)] w-full md:h-screen h-[93vh] overflow-y-auto overflow-x-hidden'>
                <Outlet />
            </div>
            <BottomBar/>
        </div>
    )
}

export default Layout
