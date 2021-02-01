import React from 'react'
import {sendMessageActionCreater, storeMessageTextActionCreater} from "../../redux/reducers/messagesReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (data) => {
    // debugger;
    let state = data.store.getState()

    let sendMessage = () => {
        data.store.dispatch(sendMessageActionCreater())
    }

    let onMessageChange = (text) => {
        data.store.dispatch(storeMessageTextActionCreater(text))
    }

    return (
        <Dialogs
            sendMessage={sendMessage}
            onMessageChange={onMessageChange}
            messagesPage={state.messagesPage}

        />
    );
}

export default DialogsContainer;