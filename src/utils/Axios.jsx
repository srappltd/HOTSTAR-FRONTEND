import axios from "axios";
import { JwtTokenGet } from "./JwtToken";

export const baseUrl = 'https://hotstar-backend-3gxa.onrender.com'
const baseUrlApi = 'https://hotstar-backend-3gxa.onrender.com/api'
export const Axios = axios.create({
    baseURL:baseUrlApi,
    headers: {
        Authorization: `Bearer ${JwtTokenGet()}`,
    },
    withCredentials:true,
})