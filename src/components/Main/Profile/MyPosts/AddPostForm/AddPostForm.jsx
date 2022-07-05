import s from "../MyPosts.module.css"
import { Field, reduxForm } from 'redux-form';

const AddPostForm = (props) =>{
    return(
        <form className={s.post_block} onSubmit={props.handleSubmit}>
          <Field component={'textarea'} placeholder="Что у вас нового?" name={'PostText'}/>
          <button className={s.add_post_button}>Добавить пост</button>
        </form>
    )
}

export default reduxForm({form: 'AddPostForm'})(AddPostForm);