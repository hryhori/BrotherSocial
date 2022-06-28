import { NavLink } from "react-router-dom";
import s from "./burger.module.css"


const Burger = (props) =>{
    return (
      <div className={props.active ? s.burger_menu_active : s.burger_menu_inactive} onClick={()=>props.setActive(false)}>
        <div className={s.blur} />
        <div className={s.menu_content} onClick={e => e.stopPropagation()}>
            <div className={s.logo}>{props.logo} </div>
            <span className={s.underline}/>
            <ul className={s.list}>
                {props.items.map((item) =>( 
                    <li key={item.id}>
                        <span className='material-icons'>{item.icon}</span>
                        <NavLink to={item.href} className={({isActive}) => (isActive ? s.active : s.inactive)}>{item.name}</NavLink>
                    </li>
                    ))}
            </ul>
            <span className={s.underline}/>
        </div>
      </div>
    );
}

export default Burger;