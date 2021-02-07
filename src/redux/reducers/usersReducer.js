const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    allUsers: [
        {
            id: 1,
            name: 'Simple Name',
            profileImage: 'url',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 2,
            name: 'Simple Name',
            profileImage: 'url',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 3,
            name: 'Simple Name',
            profileImage: 'url',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 4,
            name: 'Simple Name',
            profileImage: 'url',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 5,
            name: 'Simple Name',
            profileImage: 'url',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        },
        {
            id: 6,
            name: 'Simple Name',
            profileImage: 'url',
            location: {city: 'Moscow', country: 'Russia'},
            status: "I'm fast af boi",
            followed: false
        }
    ],
    displayedUsers: []
}

const usersReducer = (state = initialState, action) => {
    // debugger;
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                displayedUsers: state.displayedUsers.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: true}
                        } else {
                            return {...u}
                        }
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                displayedUsers: state.displayedUsers.map(u => {
                        if (u.id === action.userID) {
                            return {...u, followed: false}
                        } else {
                            return {...u}
                        }
                    }
                )
            }
        case SET_USERS:
            //                    Adding new users to existing users in allUsers
            return {...state, displayedUsers: [...state.displayedUsers, ...action.users]}

        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, userID: id})
export const unfollowAC = (id) => ({type: UNFOLLOW, userID: id})
export const setUsersAC = (users) => ({type: SET_USERS, users: users})

export default usersReducer