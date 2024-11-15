import React, { useEffect, useState } from 'react'
import { Outlet, Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom'
import Login from './component/client/login/Login'
import Deshboard from './component/client/deshboard/Deshboard'
import Layout from './component/client/Layout'
import Register from './component/client/login/Register'
import Detail from './component/client/detail/Detail'
import Sports from './component/client/sports/Sports'
import Search from './component/client/search/Search'
import Movies from './component/client/movies/Movies'
import AccountLayout from './component/client/account/AccountLayout'
import Profile from './component/client/account/Profile'
import Watchlist from './component/client/account/Watchlist'
import Transactions from './component/client/account/Transactions'
import Devices from './component/client/account/Devices'
import Rentals from './component/client/account/Rentals'
import Subscription from './component/client/account/Subscription'
import ProfileEdit from './component/client/account/ProfileEdit'
import ErrorPage from './component/ErrorPage'
import { JwtTokenGet, JwtTokenSet } from './utils/JwtToken'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { asyncProfile } from './store/actions/AuthAction'
import PlaylistVideo from './component/client/playlistVideo/PlaylistVideo'
import { jwtDecode } from 'jwt-decode'
import Loading from './component/elements/Loading'
import { baseUrl } from './utils/Axios'

const Auth = () => {
  return (
    <Routes>
      <Route path='/login' Component={Login} />
      <Route path='/register' Component={Register} />
      <Route path='*' Component={ErrorPage}/>
    </Routes>
  )
}

const LayoutAuth = () => {
  return (
    <Routes>
      <Route path='/' Component={Layout}>
        <Route path='/' Component={Deshboard} />
        <Route path='/sports' Component={Sports} />
        <Route path='/explore' Component={Search} />
        <Route path='/movies' Component={Movies} />
        <Route path='/detail/:id' Component={Detail} />
        <Route path='/playlistVideo' Component={PlaylistVideo} />
        <Route path='/account' Component={AccountLayout}>
          <Route path='/account/myProfile' Component={Profile}/>
          <Route path='/account/myEditProfile' Component={ProfileEdit}/>
          <Route path='/account/watchlist' Component={Watchlist}/>
          <Route path='/account/rentals' Component={Rentals}/>
          <Route path='/account/subscription' Component={Subscription}/>
          <Route path='/account/transactions' Component={Transactions}/>
          <Route path='/account/devices' Component={Devices}/>
          <Route path='*' Component={ErrorPage}/>
        </Route>
        <Route path='*' Component={ErrorPage}/>
      </Route>
      <Route path='*' Component={ErrorPage}/>
    </Routes>
  )
}

const App = () => {
  const dispatch = useDispatch(null)
  const {pathname,search} = useLocation(null)
  const token = JwtTokenGet()
  const [clientToken,setClientToken] = useState(null)
  const [cookies, setCookie] = useCookies(['hotstar_client'])
  useEffect(()=>{
    console.log({token})
    dispatch(asyncProfile(token))
    setCookie('hotstar_client',token,{
      // sameSite:"none",
      // domain:'http://localhost:3000',
      // httpOnly:true,
      // path:"/",
      // secure:true
    })
  },[token])
  !token && (pathname == '/' || pathname == '/account' || pathname=='/explore' || pathname == '/shows' || pathname == '/movies' || pathname == '/sports' || pathname == '/categories' || pathname == '/account/myProfile' ) && (window.location.href = '/login')
  token && (pathname == '/login' || pathname == '/register') && (window.location.href = '/')
  return (
    <div id='main' className='w-full text-sm h-full overflow-hidden relative bg-[#0F1014] text-white' >
      {token ? <LayoutAuth /> : <Auth />}
      <Loading/>
    </div>  
  )
}



export default App
