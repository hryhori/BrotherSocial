import { usersAPI, followAPI } from "../../API/api";


const FOLLOW_ACTION = "FOLLOW-ACTION";
const SET_USERS ="SET-USERS";
const SET_PAGE = "CHANGE-PAGE";
const SET_PAGE_SIZE = "SET-PAGE-SIZE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE-FOLLOWING"

const initialState = {
   users: [
   ] as Array<any>,
    totalUsersCount: 0,
    pageSize: 5,
    isFetching: false,
    isFollowingInProgress: {userId: null, inProgress: false},
    currentPage: null,
}
type initialStateType = typeof initialState;

const FinderReducer = (state = initialState, action: any):initialStateType =>{
    switch(action.type){
        case FOLLOW_ACTION:{
            return {
                ...state,
                users: state.users.map(user =>{
                    if(user.id === action.user_id )
                    {
                        return {...user, followed: !user.followed};
                    }
                    return user;
                })
            };
        }
        case SET_USERS:{
            return {...state, users: action.users};
        }
        case SET_PAGE:{
            return {...state, currentPage: action.pageId};
        }
        case SET_PAGE_SIZE:{
            return {...state, pageSize: action.size};
        }
        case TOGGLE_IS_FETCHING:{
            return {...state, isFetching: action.isFetching};
        }
        case TOGGLE_FOLLOWING:{
            return {...state, isFollowingInProgress: action.isFollowingInProgress}
        }
        default:
            return state;
    }
} 

type followActionType = {type: typeof FOLLOW_ACTION, user_id: number };

export const follow = (userId:number):followActionType => ({type: FOLLOW_ACTION, user_id: userId});
export const setUsers = (users:any) => ({type: SET_USERS, users});
export const setPage = (page:any) => ({type: SET_PAGE, pageId: page});
export const setPageSize = (pageSize:any) => ({type: SET_PAGE_SIZE, size: pageSize});
export const setIsFetching = (isFetching:any) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setIsFollowingInProgress = (isFollowingInProgress:any) => ({type: TOGGLE_FOLLOWING, isFollowingInProgress})

export const getUsersThunk = (pageSize: any) => {
    return (dispatch: any) => {
    dispatch(setIsFetching(true));
      usersAPI.getUsers(undefined, pageSize).then((response: any) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items));
      });
}}

export const expandPageThunk = (pageSize: any) => {
    return (dispatch: any) =>{
    dispatch(setIsFetching(true));
    dispatch(setPageSize(pageSize));
  usersAPI.expandPage(pageSize).then((response: any) => {
    dispatch(setUsers(response.items));
    dispatch(setIsFetching(false));
  });
}}

export const followThunk = (follow_status: any, userId: any) =>{
   return (dispatch: any) => {
        dispatch(setIsFollowingInProgress({userId, inProgress: true}))
        followAPI.followUser(follow_status, userId)
            .then((resp:any) => {
                if(resp.resultCode === 0){
                    dispatch(follow(userId));
                }
                dispatch(setIsFollowingInProgress({userId, inProgress: false}))
            }
        )
}}

export default FinderReducer;