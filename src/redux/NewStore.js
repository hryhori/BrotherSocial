import {configureStore} from "redux";
import FriendSlice from "./Slices/FriendSlice";
import  AuthSlice  from './Slices/AuthSlice';

const store = configureStore({
    friends: FriendSlice,
    auth: AuthSlice,
})

export default store;