import { authAPI, profileAPI, securityAPI } from '../../API/api';
import {stopSubmit} from "redux-form"

const SET_DATA = "SET-DATA";
const SET_USER_INFO = "SET-USER-INFO";
const INITIALIZE_APP = "INITIALIZE-APP";
const SET_CAPTCHA = "GET-CAPTCHA";
const SET_IS_FETCHING = "SET-IS-FETCHING";

let initialState = {
    email: null,
    login: null,
    id: null,
    isAuth: false,
    initialized: false,
    captchaUrl: null,
    isFetching: null,
}

let AuthReducer = (state= initialState, action ) => {
    switch(action.type){
        case SET_DATA:{
            return {
                ...state,
                    ...action.data,
                    isAuth: action.isAuth,
            }
        }
        case SET_CAPTCHA:{
            return {
                ...state, 
                captchaUrl: action.captchaUrl
            }
        }
        case SET_USER_INFO:{
           return {
                ...state,
                    data: {...action.info} ,
           } 
        }
        case INITIALIZE_APP:{
            return{
                ...state,
                    initialized: true,
            }
        }
        case SET_IS_FETCHING:{
            return {
                ...state,
                    isFetching: action.isFetching,
            }
        }

        default:
            return state;
    }
}

export const setData = (data, isAuth) => ({type: SET_DATA, data: {...data}, isAuth});
export const setUserInfo = (info) => ({type: SET_USER_INFO, info});
export const initializeSuccess = () => ({type: INITIALIZE_APP});
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA, captchaUrl});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});

export const authThunk = () =>{
    return (dispatch) =>{
      authAPI.authentication()
          .then((response) => {
              if(response.data.resultCode === 0){
                  let data = response.data.data;
                  dispatch(setData(data, true));
                profileAPI.getProfile(data.id).then((second_response)=> {dispatch(setUserInfo(second_response.data))})
              }
          })
    }
  }

export const LoginThunk = (email, password, captcha) =>{
    return (dispatch) =>{
        authAPI.login(email, password, captcha)
            .then(resp => {
                if(resp.data.resultCode === 0){
                    dispatch(authThunk());
                }
                else{
                    if(resp.data.resultCode===10){
                        dispatch(getCaptchaUrlThunk());
                    }
                    dispatch(stopSubmit("LoginForm", {_error: resp.data.messages[0]} ));
                  }    
            })
    }
}

export const LogoutThunk = () =>{
    return (dispatch) =>{
        authAPI.logout()
            .then(resp => {
                if(resp.data.resultCode === 0){
                    dispatch(setData(null, false));
                }
            })
    }
}

export const Initialize = () =>{
    return (dispatch)=>{
        let promise = [dispatch(authThunk())];
        Promise.all([promise])
            .then(()=>{
                dispatch(initializeSuccess());
            })
    }
}

export const getCaptchaUrlThunk = () => {
    return async (dispatch) =>{
        dispatch(setIsFetching(true));
        securityAPI.getCaptchaUrl().then(resp=>{
            dispatch(setCaptchaUrl(resp.data.url))
            dispatch(setIsFetching(false));})

    }
}

export default AuthReducer