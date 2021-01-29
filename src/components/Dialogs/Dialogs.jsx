import React from 'react'
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
// import Messages from "./Messages/Messages";
import Message from "./Messages/Message/Message";

const Dialogs = (data) => {

    let usersElements = data.messagesPage.usersData
        .map(User => <Dialog name={User.name} id={User.id}/>);

    let messagesElements = data.messagesPage.messagesData.map(message => <Message content={message.content} id={message.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {usersElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;