import { AddPostActionCreator, updateStatusThunk} from "../../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return{
    posts: state.ProfilePage.posts,
    PostText: state.ProfilePage.PostText,
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
  }
}


const MyPostsConteiner = connect(mapStateToProps, {AddPostActionCreator, updateStatusThunk})(MyPosts);

export default MyPostsConteiner;