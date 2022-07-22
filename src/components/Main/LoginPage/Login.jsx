import s from "./Login.module.css"
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../validators/validators';
import {Input} from "../../common/FormControl/FormControl"
import { LoginThunk } from "../../../redux/reducers/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Preloader from '../../common/Preloader/Preloader';


const LoginForm = (props) =>{
    return (
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
            type={"password"}
            className={s.email}
            validate={[required]}
          />
            {( props.isFetching ? <Preloader/> : props.captchaUrl &&   <div>
                <img src={props.captchaUrl} />
                <Field
                  component={Input}
                  name="captcha"
                  placeholder="Введите буквы с картинки"
                  validate={[required]}
                />
              </div>)
          }
          
          {props.error ? (
            <span className={s.SummaryError}>*{props.error}</span>
          ) : null}
          <div className={s.buttons}>
            <NavLink to="/signup" className={s.btn2}>
              Sign Up
            </NavLink>
            <button className={s.btn}>Log In</button>
          </div>
        </div>
      </form>
    );
}

const LoginReduxForm = reduxForm({form: 'LoginForm'})(LoginForm)

const Login = (props) => {

  let onSubmit = (formData) =>{
     props.LoginThunk(formData.email, formData.password, formData.captcha)
  }

  if(props.isAuth){
    return <Navigate to={"/profile/" + props.userId} />
  }
    return (
      <div className={s.login_wrapper}>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} isFetching={props.isFetching}/>
      </div>
    );
}

const mapStateToProps = (state) =>{
  return {
    isAuth: state.auth.isAuth, userId: state.auth.id,
    captchaUrl: state.auth.captchaUrl,
    isFetching: state.auth.isFetching,
  }}

export default connect(mapStateToProps, {LoginThunk})(Login);