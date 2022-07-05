import Dialogs from "./Dialogs";
import { UpdateMessageTextActionCreator, SendMessageActionCreator } from "../../../redux/reducers/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';

let mapStateToProps = (state) => {
  return{
    data: state.DialogsPage,
  }
}

const DialogsConteiner = withAuthRedirect(connect(mapStateToProps, {SendMessageActionCreator})(Dialogs));

export default DialogsConteiner;