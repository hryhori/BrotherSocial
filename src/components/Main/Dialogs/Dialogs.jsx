import s from "./Dialogs.module.css";
import Dialog from "./DialogItem/DialogItem";
import Message from "./MessageItem/MessageItem";
import React from "react";

const Dialogs = (props) => {

  let SendMessageText = React.createRef();

  let SendMessage = () => {
    props.send_message();
  };

  let UpdateEnteredText = () => {
    let text = SendMessageText.current.value;
    props.update_entered_text(text);
  }

  let DialogsElements = props.data.dialogs.map(dialog => (<Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>) )
  let Messages = props.data.messages.map( message => (<Message key={message.id} text={message.text} id={message.id}/>) )
  let NewMessageText = props.data.NewMessageText;

  return (
    <div className={s.dialogs_wrapper}>
      <div className={s.dialogs}>
        <h5>Dialogs</h5>
        {DialogsElements}
      </div>
      <div className={s.texting}>
        <div className={s.messages}>{Messages}</div>
        <div className={s.send_message_block}>
          <textarea
            ref={SendMessageText}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Что у вас нового?"
            onChange={UpdateEnteredText}
            value={NewMessageText}
          ></textarea>
          <button className={s.send_message_button} onClick={SendMessage}>Отправить сообщение</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;


