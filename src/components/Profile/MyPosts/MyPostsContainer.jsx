import React from "react";
import {addPostActionCreater, savePostStateActionCreater} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (data) => {

    let state = data.store.getState()

    let addNewPost = () => {
        data.dispatch(addPostActionCreater())
    }

    let onPostChange = (text) => {
        data.dispatch(savePostStateActionCreater(text))
    }

    return (
        <MyPosts postsData={state.profilePage.postsData}
                 savePostState={onPostChange}
                 addPost={addNewPost}
                 newPostText={state.profilePage.newPostText}
        />
    );
}

export default MyPostsContainer