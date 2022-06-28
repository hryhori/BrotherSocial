import s from "./Profileinfo.module.css";
import Preloader from "../../../common/Preloader/Preloader";
import { Youtube, Instagram, Facebook, Twitter } from "react-bootstrap-icons";

const ProfileInfo = (props) => {
  let photo = () => {
    if (props.photos == null) {
      return <Preloader />;
    } else {
      return (
        <div className={s.ava}>
          {props.photos.large? <img src={props.photos.large} alt="" /> : <Preloader/> }
        </div>
      );
    }
  };
  let social = () => {
      if (props.social != null){
      {return props.social.map( (soc) => {
          switch (soc.network) {
            case "youtube": {
              return <a href={soc.link} key={soc.network}>
              <Youtube/>
            </a>
            }
            case "instagram": {
              return <a href={soc.link} key={soc.network}>
                  <Instagram/>
                </a>
            }
            case "facebook": {
              return <a href={soc.link} key={soc.network}>
                  <Facebook/>
                </a>
            }
            case "twitter": {
              return <a href={soc.link} key={soc.network}> 
                  <Twitter/> 
                </a>
            }
          }
        })};}
  };
  return (
    <div className={s.profile_wrapper}>
      {photo()}
      <div className="status">
        <p>{props.aboutMe}</p>
        <div className={s.user_links}>{social()}</div>
        <div className={s.friends_block}>
          <h5>Friends:</h5>
          <div className={s.my_friends}>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
