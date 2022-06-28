import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";
import Burger from "./burger_menu/burger";
import { useState } from "react";
import AuthButtons from './components/AuthButtons/AuthButtons';
import UserInfoBar from "./components/UserInfoBar/UserInfoBar";

function Nav(props) {
  const [menuActive, setMenuActive] = useState(false);
    return (
      <div className={s.nav_wrapper}>
        <div className={`${s.menu_icon} ${menuActive ? s.active : null}`} onClick={() => setMenuActive(!menuActive)}>
          <span></span>
        </div>
        <div className={s.menu_wrapper}>
          <div className={s.logo}>
            <h1>Logo</h1>
          </div>
          <ul className={s.menu}>
            {
              props.info.links.map((item)=>(
              <li key={item.id}>
              <NavLink to={item.href} className={({isActive}) => (isActive ? s.active : s.inactive)}>{item.name}</NavLink>
              </li>
              ))
            }
          </ul>
          {props.about_user.isAuth ? <UserInfoBar {...props.about_user.data}/> : <AuthButtons/>}
        </div>
        <Burger active={menuActive} setActive={setMenuActive} items={props.info.links} logo={props.info.logo} />
      </div>
    );
}

export default Nav;