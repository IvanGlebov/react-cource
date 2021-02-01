import React from "react";
import {addPostActionCreater, savePostStateActionCreater} from "../../../redux/reducers/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (data) => {
//
//     let state = data.store.getState()
//
//     let addNewPost = () => {
//         data.dispatch(addPostActionCreater())
//     }
//
//     let onPostChange = (text) => {
//         data.dispatch(savePostStateActionCreater(text))
//     }
//
//     return (
//         <MyPosts postsData={state.profilePage.postsData}
//                  savePostState={onPostChange}
//                  addPost={addNewPost}
//                  newPostText={state.profilePage.newPostText}
//         />
//     );
// }


const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        savePostState:(text) => {
            dispatch(savePostStateActionCreater(text))
        },
        addPost:() => {
            dispatch(addPostActionCreater())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer