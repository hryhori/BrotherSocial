import s from "../Dialogs.module.css";

const Message = (props) =>{
  if(props.id%2 === 1)
  {
    return(
      <div className={s.message}>
        <div className={s.dialog_ava_wrapper}>
        <span className={s.ava}></span>
        </div>
        <div className={s.message_name}>{props.id}</div>
        <div className={s.text}>{props.text}</div>
        </div>
    );
  }
  else{
    return (
      <div className={s.message_answer}>
        <div className={s.message_name}>{props.id}</div>
        <div className={s.text}>{props.text}</div>
        <div className={s.dialog_ava_wrapper}>
          <span className={s.ava}></span>
        </div>
      </div>
    );
  }
  }

  export default Message;