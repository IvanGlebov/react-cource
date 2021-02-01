import ProfileInfo from "./ProfileInfo";
const {connect} = require("react-redux");


const mapStateToProps = (state) => {
    return {
        user: state.profilePage.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}
const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer