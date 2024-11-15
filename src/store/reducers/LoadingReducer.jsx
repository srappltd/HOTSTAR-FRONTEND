import { createSlice } from "@reduxjs/toolkit";

const LoadingSlice = createSlice({
    name:"Loader",
    initialState:{
        loading:false,
    },
    reducers:{
        getLoader:(state,action)=>{
            state.loading = action.payload
            // state.loading = !state.loading
        }
    }
})
export const LoadingReducer = LoadingSlice.reducer
export const {getLoader} = LoadingSlice.actions