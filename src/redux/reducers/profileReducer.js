const ADD_POST = 'ADD-POST'
const SAVE_POST_STATE = 'SAVE-POST-STATE'

export const addPostActionCreater = () => ({type: ADD_POST})

export const savePostStateActionCreater = (text) => ({type: SAVE_POST_STATE, newValue: text})

let initialState = {
    postsData: [
        {id: 1, message: 'text1', likes: 15, reply: 5, views: 20},
        {id: 2, message: 'text2', likes: 20, reply: 4, views: 40}
    ],
    newPostText: 'text',
    user: {name: 'Ivan Glebov', birthDate: '08.02.2002', city: 'Vsevolozhsk'}
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // debugger;
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: 25,
                reply: 3,
                views: 60
            };
            if (newPost.message !== '') {
                state.postsData.push(newPost);
                state.newPostText = '';
            } else {
                alert("ERROR! Can't create empty post")
            }
            return state
            // break;
        case SAVE_POST_STATE:
            state.newPostText = action.newValue;
            return state
            // break;
        default:
            return state
    }
    // return state
}

export default profileReducer