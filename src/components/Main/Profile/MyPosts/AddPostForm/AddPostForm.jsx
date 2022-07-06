import s from "../MyPosts.module.css"
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../../common/FormControl/FormControl';
import { maxLengthCreator } from '../../../../../validators/validators';


const AddPostForm = (props) =>{
  let maxLength = 300;
    return(
        <form className={s.post_block} onSubmit={props.handleSubmit}>
          <Field component={Textarea} placeholder="Что у вас нового?" name={'PostText'} maxLength={maxLength} validate={[maxLengthCreator(maxLength)]}/>
          <button className={s.add_post_button}>Добавить пост</button>
        </form>
    )
}

export default reduxForm({form: 'AddPostForm'})(AddPostForm);