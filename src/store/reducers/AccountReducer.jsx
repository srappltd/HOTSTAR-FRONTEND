import { createSlice } from "@reduxjs/toolkit"

const AccountSlice = createSlice({
    name:"AccountMenu",
    initialState:{
        isActive:false
    },
    reducers:{
        getMenu:(state,action)=>{
            state.isActive = action.payload
        }
    }
})

export const AcccountReducer = AccountSlice.reducer
export const {getMenu} = AccountSlice.actions