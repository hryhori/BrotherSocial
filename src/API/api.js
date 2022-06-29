import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '0ab0bc90-b21b-4863-9010-048b6877ad81'
    }
})

export const getUsers = (currentPage = 1, pageSize = 5) => {
   return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then((resp)=>(resp.data))
}

export const expandPage = (pageSize = 5) =>{
    return instance
        .get(`users?count=${pageSize}`)
        .then((resp)=>(resp.data))
}

export const followUser = (followed, userId) =>{
    return  followed ? (
        instance
            .delete(`follow/${userId}`)
                .then((resp) => resp.data)
        ) : (
        instance
            .post(`follow/${userId}`)
                .then((resp) => resp.data)
        );
}

export const getProfile = (userId) =>{
    return instance
        .get('profile/' + userId)
}

export const authentication = () =>{
    return instance
        .get('auth/me')
}