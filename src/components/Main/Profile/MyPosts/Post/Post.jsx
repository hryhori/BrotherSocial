import s from "./Post.module.css"

const Post = (props) => {
 return (
   <div className={s.post}>
     <div className={s.item}>{props.message}</div>
     <div className={s.post_info}>
       <span>{props.likes} </span>
       <button className={s.like_button}>
  <i className="material-icons">favorite_border</i>
            </button>
     </div>
   </div>
 );
}

export default Post;