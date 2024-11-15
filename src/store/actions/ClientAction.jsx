import { Axios } from "../../utils/Axios"
import { getCategory, getDetail } from "../reducers/ClientReducer"
import { getLoader } from "../reducers/LoadingReducer"

export const asyncDatail = (id)=> async (dispatch,getState)=>{
    try {
        const {data} = await Axios.post(`/client/detail/${id}`)
        if(data.success){
            dispatch(getDetail(data.upload))
        }
    } catch (error) {
        console.log(error.response.data)
    }
}
export const asyncCategory = (id)=> async (dispatch,getState)=>{
    try {
        const {data} = await Axios.post(`/search/category?_id=${id}`)
        if(data.success){
            dispatch(getCategory(data.categories))
            // dispatch(getState().LoadingReducer.loading)
        }
    } catch (error) {
        console.log(error.response)
    }
}
