import s from './Message.module.css'

const Message = (data) => {
    return (
        <div className={s.message}>
            {data.content}
        </div>
    );
}

export default Message;