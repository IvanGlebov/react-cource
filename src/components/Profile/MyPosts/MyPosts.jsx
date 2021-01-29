import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post.jsx"

const MyPosts = (data) => {


    let postElements = data.postsData
        .map(post => <Post
            message={post.message}
            likes={post.likes}
            reply={post.reply}
            views={post.views}
            id={post.id}/>
        );

    return (
        <div>
            <div className={s.myPosts}>
                My posts
            </div>
            <div className={s.textInput}>
                <textarea placeholder="Put your post here"/>
            </div>
            <div className={s.postPost}>
                <button>Add post</button>
            </div>
            <div className={s.Posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;