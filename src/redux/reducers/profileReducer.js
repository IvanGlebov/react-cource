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
        {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likes: 25,
                reply: 3,
                views: 60
            };
            let stateCopy = {...state}
            stateCopy.postData = [...state.postsData]
            if (newPost.message !== '') {
                stateCopy.postsData.push(newPost);
                stateCopy.newPostText = '';
            } else {
                alert("ERROR! Can't create empty post")
            }
            return stateCopy
        }
        case SAVE_POST_STATE:
        {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newValue;
            return stateCopy

        }
        default:
            return state
    }
}

export default profileReducer