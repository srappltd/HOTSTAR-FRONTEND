import { configureStore } from "@reduxjs/toolkit";
import { AcccountReducer } from "./reducers/AccountReducer";
import { AuthReducer } from "./reducers/AuthReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { ClientReducer } from "./reducers/ClientReducer";

export const Store = configureStore({
    reducer:{
        AuthReducer,
        AcccountReducer, // Account Menu Reducer
        LoadingReducer,
        ClientReducer, // detail 
    }
})