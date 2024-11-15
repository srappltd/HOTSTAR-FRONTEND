import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { getMenu } from '../../../store/reducers/AccountReducer'
import { asyncLogout } from '../../../store/actions/AuthAction'

const AccountLayout = () => {
  const dispatch = useDispatch(null)
  const navigate = useNavigate(null)
  const {isActive} =  useSelector(state=>state.AcccountReducer)
  const onMenuHanlder = ()=>{
    dispatch(getMenu(!isActive))
  }
  const onLogoutHandler = ()=>{
    dispatch(getMenu(!isActive))
    dispatch(asyncLogout(navigate))
  }
  return (
    <div className='w-full h-screen lg:py-16 md:py-8 sm:py-4 lg:px-20 md:px-10 sm:px-7'>
        <div className='w-full h-full flex md:border border-[#22242d]'>
            <div className={`md:w-[25%] w-[65%] md:left-0 right-0 z-50 md:h-full bg-[#131419] md:relative absolute md:py-10 py-5 border-[#22242d] border-r md:flex ${isActive ? 'flex' : 'hidden'} flex-col md:gap-7 gap-3 md:top-0 top-12 md:shadow-none shadow-xl shadow-gray-950 font-medium tracking-wide md:text-base text-sm text-slate-300`}>
                <NavLink onClick={onMenuHanlder} to={'/account/myProfile'} className={e=>e.isActive ? 'text-white transition-all border-r-[3px] px-7' : 'hover:text-white transition-all px-7'}>My Profile</NavLink>
                <NavLink onClick={onMenuHanlder} to={'/account/watchlist'} className={e=>e.isActive ? 'text-white transition-all px-7  border-r-[3px]' : 'hover:text-white transition-all px-7'}>My Watchlist</NavLink>
                <NavLink onClick={onMenuHanlder} to={'/account/subscription'} className={e=>e.isActive ? 'text-white transition-all px-7  border-r-[3px]' : 'hover:text-white transition-all px-7'}>My Subcription</NavLink>
                <NavLink onClick={onMenuHanlder} to={'/account/rentals'} className={e=>e.isActive ? 'text-white transition-all px-7  border-r-[3px]' : 'hover:text-white transition-all px-7'}>My Rentals</NavLink>
                <NavLink onClick={onMenuHanlder} to={'/account/transactions'} className={e=>e.isActive ? 'text-white transition-all px-7  border-r-[3px]' : 'hover:text-white transition-all px-7'}>My Transactions</NavLink>
                <NavLink onClick={onMenuHanlder} to={'/account/devices'} className={e=>e.isActive ? 'text-white transition-all px-7  border-r-[3px]' : 'hover:text-white transition-all px-7'}>Manage your devices</NavLink>
                <NavLink onClick={onLogoutHandler} className={e=>e.isActive ? 'text-white transition-all px-7  border-r-[3px]' : 'hover:text-white transition-all px-7'}>Logout</NavLink>
            </div>
            <div className='lg:w-[75%] w-full h-full relative'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default AccountLayout
