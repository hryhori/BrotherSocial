const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, text: "Hi!" },
        { id: 2, text: "Yo!" },
        { id: 3, text: "Lol!" },
        { id: 4, text: "Kek" },
        { id: 5, text: "Chevurek!" },
      ],

      NewMessageText: '',

      dialogs: [
        { id: 1, name: "Alex" },
        { id: 2, name: "Vasya" },
        { id: 3, name: "Petya" },
        { id: 4, name: "Kolya" },
        { id: 5, name: "Ivan" },
      ],
}

let DialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_MESSAGE_TEXT:
        {
                return {...state, NewMessageText: action.newText};
        }
        case SEND_MESSAGE:
            {    
            return {
              ...state,
              messages: [...state.messages, { id: 6, text: state.NewMessageText },], NewMessageText: "",
            };
            }
        default:
            return state;
    }
}

export const UpdateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});
export const SendMessageActionCreator = () =>({type: SEND_MESSAGE});

export default DialogsReducer;