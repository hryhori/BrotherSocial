import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [
        { id: 1, text: "Hi!" },
        { id: 2, text: "Yo!" },
        { id: 3, text: "Lol!" },
        { id: 4, text: "Kek" },
        { id: 5, text: "Chevurek!" },
      ],

      dialogs: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Vasya" },
        { id: 3, name: "Petya" },
        { id: 4, name: "Kolya" },
        { id: 5, name: "Ivan" },
      ],
}

const DialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers:{
        SendMessage: (state, action) =>{
            return {
                ...state,
                messages: [...state.messages, { id: 6, text: action.text},],
        }
      }
    }   
})

export const {SendMessage} = DialogsSlice.actions;
export default DialogsSlice.reducer
