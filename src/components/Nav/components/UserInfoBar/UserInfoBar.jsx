import s from './UserInfoBar.module.css'
import {BoxArrowRight} from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom';

const UserInfoBar = (props) => {
    return(
        <div className={s.uib_wrapper}>
            <div className={s.user_photo}>
                {props.photos ? (props.photos.small ? props.photos.small : <span className={s.ava}></span>) : <span className={s.ava}></span>}
            </div>
            <div className={s.user_name}>
                <NavLink to={'/Profile/'+ props.userId}>{props.fullName}</NavLink>
            </div>
            <div className={s.logout}>
                <span onClick={props.LogoutThunk} className={s.logout_btn}><BoxArrowRight size='2em'/></span>
            </div>
        </div>
    );
}

export default UserInfoBar;