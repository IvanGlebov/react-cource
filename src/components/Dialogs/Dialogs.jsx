import React from 'react'
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Messages/Message";


const Dialogs = (data) => {
    // debugger;
    let usersElements = data.messagesPage.usersData
        .map(User => <Dialog name={User.name}
                             id={User.id}
                             key = {User.id}/>);
    let messagesElements = data.messagesPage.messagesData
        .map(message => <Message content={message.content}
                                 id={message.id}
                                 messageType={message.messageType}
                                 key = {message.id}/>);

    let sendMessage = () => {
        data.sendMessage()
    }

    let onMessageChange = (e) => {
        data.onMessageChange(e.target.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {usersElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={s.sendMessageBlock}>
                    <textarea onChange={onMessageChange}
                              value={data.messagesPage.newMessageText}
                              placeholder='Touch to write'/>
                    <button onClick={sendMessage}
                        className={s.sendMessageButton}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs