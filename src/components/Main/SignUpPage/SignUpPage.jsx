import s from "./SignUpPage.module.css"
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../validators/validators';
import {Input} from "../../common/FormControl/FormControl"

const SignUpForm = (props) =>{
    return(
        <div className={s.form_wrapper}>
        <form onSubmit={props.handleSubmit}>
        <div className={s.box}>
          <h1 className={s.h1}>Sign Up</h1>

          <Field
            component={Input}
            name="email"
            placeholder="Email"
            className={s.email}
            disabled={true}
            validate={[required]}
          />

          <Field
            component={Input}
            name="name"
            placeholder="Your Name"
            className={s.email}
            disabled={true}
            validate={[required]}
          />

            <Field
            component={Input}
            name="password"
            placeholder="Password"
            className={s.email}
            disabled={true}
            validate={[required]}
          />
            <button className={s.btn}>Sign Up</button>
        </div>
      </form>
      <p>Want to Log In? <NavLink to="/login" className={s.btn2}>Click Here!</NavLink></p> 
      </div>
    )
}

const SignUpReduxForm = reduxForm({form: 'SignUpForm'})(SignUpForm)

const SignUp = () => {
    return (
      <div className={s.login_wrapper}>
        <SignUpReduxForm />
      </div>
    );
}

export default SignUp;