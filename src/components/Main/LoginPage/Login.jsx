import s from "./Login.module.css"
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../validators/validators';
import {Input} from "../../common/FormControl/FormControl"

const LoginForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
        <div className={s.box}>
          <h1 className={s.h1}>Log In</h1>

          <Field
            component={Input}
            name="email"
            placeholder="Email"
            className={s.email}
            validate={[required]}
          />

            <Field
            component={Input}
            name="password"
            placeholder="Password"
            className={s.email}
            validate={[required]}
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