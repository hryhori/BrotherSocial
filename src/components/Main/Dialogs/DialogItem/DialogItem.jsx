import { NavLink } from "react-router-dom";
import s from "../Dialogs.module.css";

const Dialog = (props) => {
    let path = "/dialogs/"+props.id;
    return (
      <div className={s.dialog}>
        <div className={s.dialog_ava_block}>
          <span className={s.ava}></span>
        </div>
        <div className={s.dialog_name}>
          <NavLink to={path}> {props.name} </NavLink>
        </div>
      </div>
    );
  }

  export default Dialog;