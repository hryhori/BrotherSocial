import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '289bf7a1-e1c0-46bf-9962-038395053d3b'
    }
})

export const usersAPI ={
    getUsers(currentPage = 1, pageSize = 5){
        return instance
             .get(`users?page=${currentPage}&count=${pageSize}`)
             .then((resp)=>(resp.data))
     },

     expandPage(pageSize = 5){
        return instance
            .get(`users?count=${pageSize}`)
            .then((resp)=>(resp.data))
    }
}

export const followAPI ={
    followUser (followed, userId){
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
}

export const profileAPI = {
    getProfile (userId){
        return instance
            .get('profile/' + userId)
    },

    updateStatus(status){
        return instance
            .put('profile/status', {status})
    },

    getStatus(userId){
        return instance
            .get('/profile/status/'+userId)
    }
}

export const authAPI = {
    authentication(){
        return instance
            .get('auth/me')
    },
    login(email, password, captcha){
        return instance
            .post('auth/login', {email, password, rememberMe: true, captcha})
    },
    logout(){
        return instance
            .delete('auth/login');
    }
}

export const securityAPI ={
    getCaptchaUrl(){
        return instance
            .get('/security/get-captcha-url');
    },
}