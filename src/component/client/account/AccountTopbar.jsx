import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenu } from '../../../store/reducers/AccountReducer'
import BackButton from '../../elements/BackButton'

const AccountTopbar = ({title}) => {
  const dispatch = useDispatch(null)
  const {isActive} =  useSelector(state=>state.AcccountReducer)
  return (
    <div className='w-full md:h-14 h-12 border-b bg-[#131419] border-[#22242d] flex items-center justify-between md:px-7 px-4 md:font-semibold font-bold md:text-lg text-base tracking-wider'>
      <BackButton position={'reletive text-3xl font-light'}/>
      {title}
      <span onClick={()=>dispatch(getMenu(!isActive))} className='font-medium text-2xl cursor-pointer block md:hidden'><i class="ri-menu-line"></i></span>
    </div>
  )
}

export default AccountTopbar
