import React, { useState } from 'react'
import RightSidebar from '../../elements/RightSidebar'
import Input from '../../elements/Input'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import Loading from '../../elements/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getLoader } from '../../../store/reducers/LoadingReducer'
import { asyncLogin } from '../../../store/actions/AuthAction'
import { Axios } from '../../../utils/Axios'
const Login = () => {
  document.title = 'Hotstar - Login'
  const dispatch = useDispatch(null)
  const navigate = useNavigate(null)
  const [loginForm, setLoginForm] = useState({ email: '', password: '' })
  const loginOnchangeHanlder = (e) => {
    const { name, value } = e.target
    setLoginForm({ ...loginForm, [name]: value })
  }
  const {loading} = useSelector(state=>state.LoadingReducer)
  const loginSubmitHandler = async (e) => {
    e.preventDefault()
    const {email,password} = loginForm
    if(email && password){
      dispatch(getLoader(!loading))
      // const {data} = await Axios.post("/client/login",loginForm)
      // alert(data)
      return dispatch(asyncLogin(loginForm,navigate))

    }
    return toast.info("All fields are required!")
  }
  return (
    <div className='w-full h-screen flex'>
      <RightSidebar />
      <Loading/>
      <div className='md:w-[calc(100%-100px)] w-full h-full flex justify-center items-center'>
        <div className='w-[512px] py-10 rounded-lg flex flex-col items-center justify-center'>
          <Link><img src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg" alt="Logo" /></Link>
          <h1 className='md:text-3xl text-2xl font-bold mt-3'>Login up to continue</h1>
          <p className='font-medium text-slate-400 mt-1'>Enter mobile number to login</p>
          <form onSubmit={loginSubmitHandler} className='w-full md:px-10 px-4 md:gap-3 gap-2 grid grid-cols-1 mt-10'>
            <Input label={'Email'} name={'email'} placeholder={'Enter Email Address'} type={'email'} onChange={loginOnchangeHanlder}/>
            <Input label={'Password'} name={'password'} placeholder={'Enter Password'} type={'password'} onChange={loginOnchangeHanlder} />
            <button className='w-full h-10 mt-4 bg-[#0849CA] text-white rounded-sm'>Login</button>
            <div className='flex justify-between items-center'>
            <Link to={'/register'} className='text-[#3974eb]'>forgot Password</Link>
            <p className='ml-auto font-medium tracking-wider'>New User ? <Link to={'/register'} className='text-[#3974eb]'>Create an account</Link></p>
            </div>
            <hr className='border border-slate-600 mt-3'/>
            <Link className='w-full py-2 border mt-7 rounded-full flex items-center border-slate-500 justify-center gap-2 transition-all focus:border-2 focus:border-slate-500'><img src="data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M17.4612 7.21757H16.751V7.18098H8.81632V10.7075H13.7989C13.072 12.7604 11.1187 14.234 8.81632 14.234C5.89503 14.234 3.52653 11.8655 3.52653 8.94425C3.52653 6.02296 5.89503 3.65446 8.81632 3.65446C10.1648 3.65446 11.3916 4.16316 12.3257 4.9941L14.8194 2.5004C13.2448 1.03292 11.1385 0.12793 8.81632 0.12793C3.94751 0.12793 0 4.07544 0 8.94425C0 13.8131 3.94751 17.7606 8.81632 17.7606C13.6851 17.7606 17.6326 13.8131 17.6326 8.94425C17.6326 8.35311 17.5718 7.77609 17.4612 7.21757Z' fill='%23FFC107' /%3E%3Cpath d='M1.0166 4.84069L3.9132 6.96498C4.69697 5.02451 6.59513 3.65446 8.8164 3.65446C10.1649 3.65446 11.3916 4.16316 12.3257 4.9941L14.8194 2.5004C13.2448 1.03292 11.1386 0.12793 8.8164 0.12793C5.43005 0.12793 2.49333 2.03975 1.0166 4.84069Z' fill='%23FF3D00' /%3E%3Cpath d='M8.8165 17.7612C11.0938 17.7612 13.1629 16.8897 14.7274 15.4725L11.9988 13.1635C11.0839 13.8593 9.96591 14.2356 8.8165 14.2347C6.52338 14.2347 4.57629 12.7725 3.84278 10.7319L0.967773 12.947C2.42687 15.8022 5.39004 17.7612 8.8165 17.7612Z' fill='%234CAF50' /%3E%3Cpath d='M17.4612 7.21823H16.7511V7.18164H8.81641V10.7082H13.7989C13.4512 11.6852 12.8249 12.539 11.9973 13.164L11.9987 13.1631L14.7273 15.4721C14.5342 15.6475 17.6327 13.3531 17.6327 8.9449C17.6327 8.35377 17.5719 7.77674 17.4612 7.21823Z' fill='%231976D2' /%3E%3C/svg%3E%0A" alt="" /> Continue with Google</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
