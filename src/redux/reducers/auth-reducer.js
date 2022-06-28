const SET_DATA = "SET-DATA";
const SET_USER_INFO = "SET-USER-INFO";

let initialState = {
    email: null,
    login: null,
    id: null,
    isAuth: false,
    data: null,
}

let AuthReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_DATA:{
            return {
                ...state,
                    ...action.data,
                    isAuth: true,
            }
        }
        case SET_USER_INFO:{
           return {
                ...state,
                    data: {...action.info} ,
           } 
        }

        default:
            return state;
    }
}

export const setData = (data) => ({type: SET_DATA, data: {...data}});
export const setUserInfo = (info) => ({type: SET_USER_INFO, info});

export default AuthReducer