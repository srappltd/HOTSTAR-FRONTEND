import React from 'react'
import AccountTopbar from './AccountTopbar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {profile} = useSelector(state=>state.AuthReducer)
  document.title = 'Hotstar - profile'
  return (
    <div className='w-full h-full'>
        <AccountTopbar title={'My Profile'}/>
        <div className='w-full h-[calc(100%-56px)] md:py-7 py-4 md:px-7 px-4'>
            <div className='flex items-center gap-3'>
              <span className='md:w-20 w-14 md:h-20 h-14 bg-[#8230C6] rounded-full overflow-hidden flex items-center justify-center md:text-4xl text-2xl font-semibold'>
                {profile && profile.picture ? <img src={profile.picture} className='w-full h-full object-cover' alt="" /> : 'AB' }
              </span>
              <div className='flex flex-col justify-center gap-[2px]'>
                <h1 className='font-bold md:text-lg text-base'>{profile ? `${profile.firstname} ${profile.lastname}` : 'Username' }</h1>
                <Link to={'tel:6260396658'} className='md:text-sm text-xs'>{profile ? profile.email : 'hotstar@gmail.com' }</Link>
                <Link to={'/account/myEditProfile'} className='md:text-sm text-xs font-medium text-blue-400'>Edit Profile</Link>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
