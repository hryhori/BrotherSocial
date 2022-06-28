import s from "./Profile.module.css";
import MyPostsConteiner from './MyPosts/MyPostsContainer';
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <div className={s.main}>
      <ProfileInfo {...props}/>
      <MyPostsConteiner />
    </div>
  );
};

export default Profile;
