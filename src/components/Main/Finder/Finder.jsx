import s from "./Finder.module.css";
import Preloader from '../../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { followUser } from '../../../API/api';

const Finder = (props) => {
    return (
      <div className={s.finder_wrapper}>
        <div className={s.search_block}>
          <input type="text" placeholder="Введите ФИО друга" />
          <i className="material-icons">search</i>
        </div>
        <div className={s.users}>
          {props.users.map((user) => (
            <div className={s.user_block} key={user.id}>
              <NavLink className={s.user_ava} to={`/Profile/${user.id}`}>
                {user.photos.small ? (
                  <img src={user.photos.small} style={{ padding: 10 + "px" }} />
                ) : (
                  <span className={s.ava}></span>
                )}
              </NavLink>
              <div className={s.user_name}>{user.name}</div>
              <div className={s.user_status}>
                Status: <br /> {user.status}
              </div>
              <div className={s.user_location}>
                <i className="material-icons">location_on</i>
                {"Location: " +
                  "user.location.country" +
                  ", " +
                  "user.location.city"}
              </div>
              <div className={s.user_button}>
                <button
                disabled ={props.isFollowingInProgress.userId==user.id && props.isFollowingInProgress.inProgress ? true : false}
                  className={user.followed ? s.followed : s.unfollowed}
                  onClick={() => {props.follow(user.followed, user.id)}}>
                  {user.followed ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>
          ))}
          {props.isFetching ? <Preloader /> : null}
        </div>
        <div className={s.page_counter_block}>
          <button
            onClick={() => {
              props.onPageChanged(props.pageSize + 5);
            }}
          >
            More users
          </button>
        </div>
      </div>
    );
}

export default Finder;