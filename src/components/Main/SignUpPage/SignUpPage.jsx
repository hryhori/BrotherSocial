import s from "./SignUpPage.module.css"
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const SignUpForm = (props) =>{
    return(
        <div className={s.form_wrapper}>
        <form onSubmit={props.handleSubmit}>
        <div className={s.box}>
          <h1>Sign Up</h1>

          <Field
            component={'input'}
            name="email"
            placeholder="Email"
            className={s.email}
          />

          <Field
            component={'input'}
            name="name"
            placeholder="Your Name"
            className={s.email}
          />

            <Field
            component={'input'}
            name="password"
            placeholder="Password"
            className={s.email}
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