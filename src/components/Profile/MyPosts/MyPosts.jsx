import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post.jsx"

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.Posts}>
                <Post message='text1' likes='15' />
                <Post message='text2' likes='20' />
            </div>
        </div>
    )
}
export default MyPosts;