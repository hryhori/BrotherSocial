import { Field, reduxForm } from 'redux-form';
import s from "../Dialogs.module.css"

let SendMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} className={s.send_message_block}>
        <Field component="textarea" placeholder='Enter your message' name='text'/>
        <button className={s.send_message_button}>Send Message</button>
        </form>
    )
}

export default reduxForm({form: 'SendMessage'})(SendMessageForm)