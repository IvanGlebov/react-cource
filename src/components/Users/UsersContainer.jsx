import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/reducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        allUsers: state.usersPage.allUsers,
        displayedUsers: state.usersPage.displayedUsers
    }

}

const mapDispatchToState = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToState)(Users)

export default UsersContainer

