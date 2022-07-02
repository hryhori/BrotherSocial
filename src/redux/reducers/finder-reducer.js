import { usersAPI, followAPI } from "../../API/api";


const FOLLOW_ACTION = "FOLLOW-ACTION";
const SET_USERS ="SET-USERS";
const SET_PAGE = "CHANGE-PAGE";
const SET_PAGE_SIZE = "SET-PAGE-SIZE";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING = "TOGGLE-FOLLOWING"

const initialState = {
   users: [
   ],
    totalUsersCount: 0,
    pageSize: 5,
    isFetching: false,
    isFollowingInProgress: {userId: null, inProgress: false},
}
const FinderReducer = (state = initialState, action) =>{
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

export const follow = (userId) => ({type: FOLLOW_ACTION, user_id: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPage = (page) => ({type: SET_PAGE, pageId: page});
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, size: pageSize});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setIsFollowingInProgress = (isFollowingInProgress) => ({type: TOGGLE_FOLLOWING, isFollowingInProgress})

export const getUsersThunk = (pageSize) => {
    return (dispatch) => {
    dispatch(setIsFetching(true));
      usersAPI.getUsers(null, pageSize).then((response) => {
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.items));
      });
}}

export const expandPageThunk = (pageSize) => {
    return (dispatch) =>{
    dispatch(setIsFetching(true));
    dispatch(setPageSize(pageSize));
  usersAPI.expandPage(pageSize).then((response) => {
    dispatch(setUsers(response.items));
    dispatch(setIsFetching(false));
  });
}}

export const followThunk = (follow_status, userId) =>{
   return (dispatch) => {
        dispatch(setIsFollowingInProgress({userId, inProgress: true}))
        followAPI.followUser(follow_status, userId)
            .then((resp) => {
                if(resp.resultCode === 0){
                    dispatch(follow(userId));
                }
                dispatch(setIsFollowingInProgress({userId, inProgress: false}))
            }
        )
}}

export default FinderReducer;