import s from './Message.module.css'

const Message = (data) => {

    let divClass = s.message;
    if (data.messageType === 'left') {
        divClass = s.message + ' ' + s.left;
    }
    if (data.messageType === 'right') {
        divClass = s.message + ' ' + s.right;
    }

    return (
        <div className={divClass}>
            {data.content}
        </div>
    );
}

export default Message;