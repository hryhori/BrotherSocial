import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import ProfileDetails from './ProfileDetails.jsx/ProfileDetails';
import AddPostForm  from './AddPostForm/AddPostForm.jsx';

class MyPosts extends React.Component{
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps);
    return nextProps!=this.props || nextState!=this.state;
  }
  render(){
    console.log("render")
    let postsElements = this.props.posts.map((post) => (
    <Post key={post.id} message={post.text} likes={post.likescount} />
  ));
  return (
    <div className={s.post_wrapper}>
      <ProfileDetails profile={this.props.profile} status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
      <div>
        Добавить запись:
        <AddPostForm onSubmit={(values)=>{this.props.AddPostActionCreator(values.PostText)}}/>
      </div>
      <div>
        Мои записи:
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
}};

export default MyPosts;
