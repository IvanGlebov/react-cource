import React from 'react'
import s from './Dialogs.module.css'
// import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
// import Messages from "./Messages/Messages";
import Message from "./Messages/Message/Message";

const Dialogs = (data) => {

    let usersData = [
        {id: 1, name: 'User name 1'},
        {id: 2, name: 'User name 2'},
        {id: 3, name: 'User name 3'},
        {id: 4, name: 'User name 4'},
        {id: 5, name: 'User name 5'},
        {id: 6, name: 'User name 6'},
        {id: 7, name: 'User name 7'},
        {id: 8, name: 'User name 8'},
        {id: 9, name: 'User name 9'}
    ]

    let usersElements = usersData
        .map( User => <Dialog name={User.name} id={User.id} /> );

    let messagesData = [
        {id: 1, content: 'Message 1'},
        {id: 2, content: 'Message 2'},
        {id: 3, content: 'Message 3'},
        {id: 4, content: 'Message 4'},
        {id: 5, content: 'Message 5'},
        {id: 6, content: 'Message 6'},
        {id: 7, content: 'Message 7'},
        {id: 8, content: 'Message 8'},
        {id: 9, content: 'Message 9'},
    ]

    let messagesElements = messagesData.map(message => <Message content={message.content} id={message.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { usersElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;