import { Field, reduxForm } from 'redux-form';
import s from "../Dialogs.module.css"
import { Textarea } from '../../../common/FormControl/FormControl';
import { maxLengthCreator } from '../../../../validators/validators';

let SendMessageForm = (props) =>{
    let maxLength = 500;
    return(
        <form onSubmit={props.handleSubmit} className={s.send_message_block}>
        <Field component={Textarea} placeholder='Enter your message' name='text' maxLength={maxLength} validate={maxLengthCreator(maxLength)}/>
        <button className={s.send_message_button}>Send Message</button>
        </form>
    )
}

export default reduxForm({form: 'SendMessage'})(SendMessageForm)