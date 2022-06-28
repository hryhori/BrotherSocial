import s from "./Friends.module.css"

const Friends = (props) => {
    return(
        <div className={s.friends_wrapper}>
            <div className={s.wrapper_grid}>
                {props.data.friends.map(friend => (
                    <div className={s.friend_block} key={friend.id}>
                      <div className={s.friend_ava}>
                        <span className={s.ava}></span>
                      </div>
                      <div className={s.friend_name}>{friend.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Friends;