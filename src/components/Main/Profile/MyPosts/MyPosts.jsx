import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import ProfileDetails from './ProfileDetails.jsx/ProfileDetails';
import AddPostForm  from './AddPostForm/AddPostForm.jsx';

const MyPosts = (props) => {
  
  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.text} likes={post.likescount} />
  ));
  return (
    <div className={s.post_wrapper}>
      <ProfileDetails profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
      <div>
        Добавить запись:
        <AddPostForm onSubmit={(values)=>{props.AddPostActionCreator(values.PostText)}}/>
      </div>
      <div>
        Мои записи:
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;
