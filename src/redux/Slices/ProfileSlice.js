import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        { id: 1, text: "Hey, im here!", likescount: 20 },
        { id: 2, text: "Hello world!", likescount: 10 },
        { id: 3, text: "Hello!", likescount: 10 },
        { id: 4, text: "world!", likescount: 10 },
      ] ,
      profile: null,
      status: '',
}

const ProfileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers:{
        AddPost: (state, action) =>{
            return {...state, posts:[...state.posts, {id: 5, text: action.PostText, likescount: 33}]}
        },
        SetProfile: (state, action) => {
            let social = [];
            Object.keys(action.profile.contacts).map((contact) => {
                    if(action.profile.contacts[contact])
                    {
                        social = [...social, {network: contact, link: action.profile.contacts[contact]}];
                    }
                })
            return {...state, profile: {...action.profile}, social}

        },
        SetStatus: (state, action) =>{
            return {...state, status: action.status}
        }
    }
})

export const getProfileThunk = createAsyncThunk("profile/getProfileThunk", async (_, {userId, dispatch})=>{
    const response = await profileAPI.getProfile(userId)
         dispatch(SetProfile(response.data))}
)

export const getStatusThunk = createAsyncThunk("profile/getStatusThunk", async (_, {userId, dispatch})=>{
    const response = await profileAPI.getProfile(userId)
        dispatch(SetStatus(resp.data))
    }
)

export const updateStatusThunk = createAsyncThunk("profile/updateStatusThunk", async (_, {status, dispatch})=>{
    const response = await profileAPI.updateStatus(status)
    if(response.data.resultCode===0){
        dispatch(setStatus(status))
    }
    }
)

export const {AddPost, SetProfile, SetStatus} = ProfileSlice.actions;
export default ProfileSlice.reducer
