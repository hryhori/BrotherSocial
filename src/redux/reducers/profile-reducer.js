import { getProfile } from "../../API/api"

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_PROFILE= 'SET-PROFILE';

let initialState = {
    posts: [
        { id: 1, text: "Hey, im here!", likescount: 20 },
        { id: 2, text: "Hello world!", likescount: 10 },
        { id: 3, text: "Hello!", likescount: 10 },
        { id: 4, text: "world!", likescount: 10 },
      ] ,
      PostText : '',
      profile: null,
}

const ProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_POST_TEXT:
            {
                return {...state, PostText: action.newText};
            }
        case ADD_POST:
            {
                return {...state, posts:[...state.posts, {id: 5, text: state.PostText, likescount: 33}], PostText: ''};
            }
        case SET_PROFILE:{
            let social = [];
            Object.keys(action.profile.contacts).map((contact) => {
                    if(action.profile.contacts[contact])
                    {
                        social = [...social, {network: contact, link: action.profile.contacts[contact]}];
                    }
                })
            return {...state, profile: {...action.profile}, social}
        }

        default:
            return state;
    }
}

export const AddPostActionCreator = () => ({type: ADD_POST});
export const OnTextEnterActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const getProfileThunk = (userId) =>{
    return (dispatch) =>{
        getProfile(userId).then((response)=>{
            dispatch(setProfile(response.data))
        });
    }
}

export default ProfileReducer;