import s from "./Login.module.css"
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div className={s.box}>
          <h1>Log In</h1>

          <Field
            component={'input'}
            name="email"
            placeholder="Email"
            className={s.email}
          />

            <Field
            component={'input'}
            name="password"
            placeholder="Password"
            className={s.email}
          />
            <div className={s.buttons}>
            <NavLink to="/signup" className={s.btn2}>Sign Up</NavLink>
            <button className={s.btn}>Log In</button>
            </div>
        </div>
      </form>
    )
}

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm)

const Login = () => {
    return (
      <div className={s.login_wrapper}>
        <LoginReduxForm />
      </div>
    );
}

export default Login;