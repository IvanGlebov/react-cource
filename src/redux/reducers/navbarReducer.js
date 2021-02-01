
let initialState = {
    recentFriends: [
        {
            src: '/messages/IvanGlebov',
            name: "Ivan",
            surname: "Glebov",
            imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
        },
        {
            src: '/messages/Ksusha',
            name: "Ksusha",
            surname: 'Tests',
            imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
        },
        {
            src: '/messages/Really',
            name: "Really",
            surname: 'Glebov3',
            imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSQYWj8d2vOIvQsu6KCVpu8e77DT7_WPfwLw&usqp=CAU"
        }
    ]
}

const navbarReducer = (state = initialState, action) => {

    return state
}

export default navbarReducer