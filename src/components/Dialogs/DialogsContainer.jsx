import React from 'react'
import {sendMessageActionCreater, storeMessageTextActionCreater} from "../../redux/reducers/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


// const DialogsContainer = (data) => {
//     // debugger;
//     let state = data.store.getState()
//
//     let sendMessage = () => {
//         data.store.dispatch(sendMessageActionCreater())
//     }
//
//     let onMessageChange = (text) => {
//         data.store.dispatch(storeMessageTextActionCreater(text))
//     }
//
//     return (
//         <Dialogs
//             sendMessage={sendMessage}
//             onMessageChange={onMessageChange}
//             messagesPage={state.messagesPage}
//
//         />
//     );
// }


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage:() => {dispatch(sendMessageActionCreater())},
        onMessageChange: (text) => {dispatch(storeMessageTextActionCreater(text))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;