import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PulseLoader } from 'react-spinners'
import { getLoader } from '../../store/reducers/LoadingReducer'

const Loading = ({cancelBtn,type}) => {
    const {loading} = useSelector(state=>state.LoadingReducer)
    const dispatch = useDispatch(null)
  return (
    <div className={`w-full ${ loading ? 'flex' : 'hidden'} h-screen gap-4 flex-col items-center justify-center absolute top-0 left-0 z-[9999999999999999]`}>
        <PulseLoader className=' cursor-pointer' loading={loading} color='white' />
        {cancelBtn && <button onClick={()=>dispatch(getLoader(!loading))} className='py-[6px] text-xs font-medium uppercase px-5 bg-[#383838] rounded'>Cancel</button>}
    </div>
  )
}

export default Loading
