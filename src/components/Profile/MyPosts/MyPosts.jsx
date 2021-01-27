import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Posts/Post.jsx"

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'text1', likes: 15, reply: 5, views: 20},
        {id: 2, message: 'text2', likes: 20, reply: 4, views: 40}
    ]
    let postElements = postsData
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