import React from 'react'
import Navbar from "../Navbar";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        recentFriends: state.navbar.recentFriends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer