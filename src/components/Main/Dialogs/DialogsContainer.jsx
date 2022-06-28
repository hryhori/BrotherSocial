import Dialogs from "./Dialogs";
import { UpdateMessageTextActionCreator, SendMessageActionCreator } from "../../../redux/reducers/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return{
    data: state.DialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    send_message: () =>{
      let action = SendMessageActionCreator();
      dispatch(action);
    },

    update_entered_text: (text) =>{
      let action = UpdateMessageTextActionCreator(text);
      dispatch(action);
    },
  }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsConteiner;