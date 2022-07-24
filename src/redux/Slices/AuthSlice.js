import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {stopSubmit} from "redux-form"

let initialState = {
    email: null,
    login: null,
    id: null,
    isAuth: false,
    initialized: false,
    captchaUrl: null,
    isFetching: null,
}

export const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers:{
        SetAuthData: (state, action) =>{
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        },
        SetUserInfo: (state, action) =>{
            return{...state,
                data: {...action.info} ,}
        },
        InitializeApp: (state, action) =>{
            return{...state,
                initialized: true,}
        },
        SetIsFetching:  (state, action) =>{
            return{...state,
                isFetching: action.isFetching,}
        },
        SetCaptcha: (state, action) =>{
            return{...state, 
                captchaUrl: action.captchaUrl}
        },
    },
    extraReducers:{
        [getCaptchaUrlThunk.fulfilled]: () => dispatch(setIsFetching(false)),
        [getCaptchaUrlThunk.pending]: () => dispatch(setIsFetching(true)),
    }
})

export const authThunk = createAsyncThunk('auth/authorization',
    async (_, {dispatch}) => {
       const response = await authAPI.authentication()
        if(response.data.resultCode === 0){
            let data = response.data.data;
            dispatch(SetAuthData(data, true));
        const second_response = await profileAPI.getProfile(data.id);
            dispatch(SetUserInfo(second_response.data))
        }
})

export const LoginThunk = createAsyncThunk("auth/LoginThunk", async (_, {email, password, captcha, dispatch})=>{
        const resp = await authAPI.login(email, password, captcha)
            if(resp.data.resultCode === 0){
                dispatch(authThunk());
            }
            else{
                if(resp.data.resultCode===10){
                    dispatch(getCaptchaUrlThunk());
                }
                dispatch(stopSubmit("LoginForm", {_error: resp.data.messages[0]} ));
                }    
    }
)

export const LogoutThunk = createAsyncThunk("auth/LogoutThunk", async (_, {dispatch})=>{
    const resp = await authAPI.logout()
        if(resp.data.resultCode === 0){
            dispatch(SetAuthData(null, false));
        }
}
)

export const Initialize = createAsyncThunk("auth/InitializeApp", async (_, {dispatch})=>{
    let promise = [dispatch(authThunk())];
        Promise.all([promise])
            .then(()=>{
                dispatch(initializeSuccess());
            })
}
)

export const getCaptchaUrlThunk = createAsyncThunk("auth/GetCaptcha", async (_, {dispatch})=>{
    const resp = await securityAPI.getCaptchaUrl()
        dispatch(setCaptchaUrl(resp.data.url))
}
)


export const {SetAuthData, SetUserInfo, InitializeApp, SetIsFetching, SetCaptcha} = AuthSlice.actions;
export default AuthSlice.reducer;