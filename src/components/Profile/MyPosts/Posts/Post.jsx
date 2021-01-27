import React from 'react'
import s from "./Post.module.css"

const Post = (data) => {
    return (
        <div className={s.Post}>
            <div className={s.postText}>
                {data.message}
            </div>
            <div className={s.metrics}>
                <div className={s.likes}>
                    <span>L{data.likes}</span>
                </div>
                <div className={s.reply}>
                    <span>R{data.reply}</span>
                </div>
                <div className={s.views}>
                    <span>V{data.views}</span>
                </div>
            </div>

        </div>
    );
}

export default Post