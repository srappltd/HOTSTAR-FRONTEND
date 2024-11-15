import { createSlice } from "@reduxjs/toolkit";

const ClientSlice = createSlice({
    name:"Client",
    initialState:{
        detail:null,
        category:null,
    },
    reducers:{
        getDetail:(state,action)=>{
            state.detail = action.payload
        },
        getCategory:(state,action)=>{
            state.category = action.payload
        },
        
    }
})

export const ClientReducer = ClientSlice.reducer
export const {getDetail,getCategory} = ClientSlice.actions