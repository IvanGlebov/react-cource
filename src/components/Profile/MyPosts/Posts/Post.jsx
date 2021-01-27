import React from 'react'
import s from "./Post.module.css"

const Post = (data) => {
    return (
        <div className={s.Post}>
            <div className={s.postText}>
                {data.message}
            </div>
            <div>
                <span>Likes { data.likes }</span>
            </div>

        </div>
    );
}

export default Post