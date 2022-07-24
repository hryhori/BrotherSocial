import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    friends: [
        { id: 1, name: "Alex", photo: "" },
        { id: 2, name: "Vasya", photo: ""},
        { id: 3, name: "Petya", photo: ""},
        { id: 4, name: "Kolya", photo: "" },
        { id: 5, name: "Ivan", photo: "" }
      ]
}

export const FriendsSlice = createSlice({
    name: "FriendsSlice",
    initialState,
    reducers:{
        ReturnAllFriends: (state, action) =>{
            return state
        },
    },
})

export const {ReturnAllFriends} = FriendsSlice.actions;
export default FriendsSlice.reducer;