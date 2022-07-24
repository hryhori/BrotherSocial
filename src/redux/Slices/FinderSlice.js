import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
    ],
     totalUsersCount: 0,
     pageSize: 5,
     isFetching: false,
     isFollowingInProgress: {userId: null, inProgress: false}, 
}

const FinderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    FollowAction: (state, action) => {
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.user_id) {
            return { ...user, followed: !user.followed };
          }
          return user;
        }),
      };
    },
    SetUsers: (state, action) => {
      return { ...state, users: action.users };
    },
    SetPage: (state, action) => {
      return { ...state, currentPage: action.pageId };
    },
    SetPageSize: (state, action) => {
      return { ...state, pageSize: action.size };
    },
    ToggleIsFetching: (state, action) => {
      return { ...state, isFetching: action.isFetching };
    },
    ToggleIsFollowingInProgress: (state, action) => {
      return { ...state, isFollowingInProgress: action.isFollowingInProgress };
    },
  },
  extraReducers:{
    [getUsersThunk.fulfilled]: () => dispatch(setIsFetching(false)),
    [getUsersThunk.pending]: () => dispatch(setIsFetching(true)),
    [expandPageThunk.fulfilled]: () => dispatch(setIsFetching(false)),
    [expandPageThunk.pending]: () => dispatch(setIsFetching(true)),

  }
});


export const getUsersThunk = createAsyncThunk(
    'getUsers', async (_, {pageSize, dispatch}) => {
      const response = await usersAPI.getUsers(null, pageSize)
        dispatch(SetUsers(response.items));
    }
)

export const expandPageThunk = createAsyncThunk(
    'expandPage', async (_, {pageSize, dispatch}) => {
      const response = await usersAPI.expandPage(pageSize)
        dispatch(SetUsers(response.items));
    }
)

export const followThunk = createAsyncThunk(
    'followThunk', async (_, {follow_status, userId, dispatch}) => {
      const response = await followAPI.followUser(follow_status, userId)
      if(response.resultCode === 0){
        dispatch(FollowAction(userId));
    }
        dispatch(ToggleIsFollowingInProgress({ userId, inProgress: false }));
    }
)

export const {FollowAction, SetUsers, SetPage, SetPageSize, ToggleIsFetching,ToggleIsFollowingInProgress} = FinderSlice.actions;
export default FinderSlice.reducer;