import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import Preloader from "../../../common/Preloader/Preloader";

const MyPosts = (props) => {

  let AddPostText = React.createRef();

  let Add_Post = () =>{
    props.AddPost();
  }

  let UpdatePostText = () =>{
    let text = AddPostText.current.value;
    props.onTextEnter(text);
  }

  let postsElements = props.posts.map((post) => (
    <Post key={post.id} message={post.text} likes={post.likescount} />
  ));

  return (
    <div className={s.post_wrapper}>
      <h3>{props.profile ? props.profile.fullName : <Preloader/>}</h3>
      <div>
        Добавить запись:
        <div className={s.post_block}>
          <textarea ref={AddPostText} name="" id="" cols="30" rows="10" placeholder="Что у вас нового?" onChange={UpdatePostText} value ={props.PostText}/>
          <button className={s.add_post_button} onClick={Add_Post}>Добавить пост</button>
          <button className={s.delete_button}>Удалить</button>
        </div>
      </div>
      <div>
        Мои записи:
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};

export default MyPosts;