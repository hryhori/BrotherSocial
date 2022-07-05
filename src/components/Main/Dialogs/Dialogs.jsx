import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import React from "react";
import SendMessageForm from "./SendMessageForm/SendMessageForm";

const Dialogs = (props) => {

  let DialogsElements = props.data.dialogs.map(dialog => (<Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>) )
  let Messages = props.data.messages.map( message => (<Message key={message.id} text={message.text} id={message.id}/>) )

  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.dialogs}>
        <h5>Dialogs</h5>
        {DialogsElements}
      </div>
      <div className={s.texting}>
        <div className={s.messages}>{Messages}</div>
        <SendMessageForm onSubmit={(values)=>{props.SendMessageActionCreator(values.text)}}/>
      </div>
    </div>
  );
};

export default Dialogs;


