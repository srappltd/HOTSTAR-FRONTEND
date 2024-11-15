import { toast } from "react-toastify"
import { Axios } from "../../utils/Axios"
import { JwtTokenGet, JwtTokenRemove, JwtTokenSet } from "../../utils/JwtToken"
import { getBanners, getCategory, getCategoryFav, getProfile, getToken, getWatchlist } from "../reducers/AuthReducer"
import { getLoader } from "../reducers/LoadingReducer"
import { useNavigate } from "react-router-dom"


export const asyncProfile = (token) => async (dispatch,getState)=>{
    try {
        const {data} = await Axios.post('/client','',{headers:{"Authorization":"Bearer " + JwtTokenGet()}})
        // console.log(data)
        if(data.success){
            dispatch(getToken(data.token))
            dispatch(getProfile(data.client))
            dispatch(getBanners(data.banners))
            dispatch(getCategory(data.category))
            dispatch(getCategoryFav(data.client.categoryFav))
            dispatch(getWatchlist(data.client.watchlist))
        }
    } catch (error) {
        console.log(error.response)
    }
}

export const asyncLogin = (loginForm,navigate)=> async (dispatch,getState)=>{
    try {
        const {data} = await Axios.post("/client/login",loginForm)
        const id = toast.loading("Please wait...")
        if(data.success){
            dispatch(getProfile(data.client))
            JwtTokenSet(data.token || null)
            dispatch(getToken(data.token || null))
            setTimeout(()=>{
                dispatch(getLoader(!getState().LoadingReducer.loading))
                toast.done(id)
                // navigate("/")
                window.location.href = '/'
            },3500)
        }
    } catch (error) {
        dispatch(getLoader(!getState().LoadingReducer.loading))
        toast.error(error.response.data.message)
    }
}
export const asyncRegister = (registerForm,navigate)=> async (dispatch,getState)=>{
    try {
        const {data} = await Axios.post("/client/register",registerForm)
        const id = toast.loading("Please wait...")
        console.log(data)
        if(data.success){
            dispatch(getProfile(data.client))
            JwtTokenSet(data.token || null)
            dispatch(getToken(data.token || null))
            setTimeout(()=>{
                dispatch(getLoader(!getState().LoadingReducer.loading))
                toast.done(id)
                // navigate("/")
                window.location.href = '/'
            },3500)
        }
    } catch (error) {
        dispatch(getLoader(!getState().LoadingReducer.loading))
        toast.error(error.response.data.message)
    }
}

export const asyncLogout = (navigate)=>async (dispatch,getState)=>{
    try {
        dispatch(getToken(null))
        dispatch(getProfile(null))
        dispatch(getBanners(null))
        dispatch(getCategory(null))
        dispatch(getCategoryFav(null))
        dispatch(getWatchlist(null))
        JwtTokenRemove()
        setTimeout(()=>{
            navigate("/login")
        },2000)
    } catch (error) {
        
    }
}