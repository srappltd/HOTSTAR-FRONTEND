
export const JwtTokenSet = (token)=>{
    return sessionStorage.setItem('hotstarToken',token || null)
}
export const JwtTokenGet = ()=>{
    return sessionStorage.getItem('hotstarToken')
}

export const JwtTokenRemove = ()=>{
    return sessionStorage.removeItem('hotstarToken')
}