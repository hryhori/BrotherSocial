import { OnTextEnterActionCreator, AddPostActionCreator } from "../../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
  return{
    posts: state.ProfilePage.posts,
    PostText: state.ProfilePage.PostText,
    profile: state.ProfilePage.profile,
  }
}


const MyPostsConteiner = connect(mapStateToProps, {AddPostActionCreator, OnTextEnterActionCreator})(MyPosts);

export default MyPostsConteiner;