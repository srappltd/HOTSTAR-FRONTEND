import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name:"Auth",
    initialState:{
        profile:null,
        subscription:null,
        watchlist:null,
        category:null,
        categoryFav:null,
        banners:null,
        token:null,
        isAuth:false,
        error:null,
    },
    reducers:{
        getProfile:(state,action)=>{
            state.profile = action.payload
            state.isAuth = true
        },
        getSubscription:(state,action)=>{
            state.subscription = action.payload
        },
        getWatchlist:(state,action)=>{
            state.watchlist = action.payload
        },
        getCategory:(state,action)=>{
            state.category = action.payload
        },
        getCategoryFav:(state,action)=>{
            state.categoryFav = action.payload
        },
        getBanners:(state,action)=>{
            state.banners = action.payload
        },
        getToken:(state,action)=>{
            state.token = action.payload
        },
        
        getLogout:(state,action)=>{
            state.profile = null
            state.isAuth = false
        },
        getError:(state,action)=>{
            state.error = action.payload
        }
    }
});

export const AuthReducer = AuthSlice.reducer
export const {getProfile,getBanners,getCategory,getCategoryFav,getWatchlist,getSubscription,getToken,getLogout,getError} = AuthSlice.actions
