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

const mapDispatchToProps = (dispatch) => {
  return{
    AddPost: () => {
      let action = AddPostActionCreator();
      dispatch(action);
    },
    onTextEnter: (text) =>{
      let action = OnTextEnterActionCreator(text);
      dispatch(action);
    }
  }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;