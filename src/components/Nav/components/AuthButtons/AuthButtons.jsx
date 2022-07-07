import s from './AuthButtons.module.css';
import {NavLink} from "react-router-dom";

const AuthButtons = () => {
    return (
        <div className={s.btn_group}>
        <NavLink to="/login" className={s.btn_sign}>
          Sign In
        </NavLink>
        <NavLink to="/signup" className={s.btn_reg}>
          Register
        </NavLink>
      </div>
    );
  }

  export default AuthButtons;