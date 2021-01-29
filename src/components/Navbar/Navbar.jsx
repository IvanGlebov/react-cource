import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import RecentFriends from "./RecentFriends/RecentFriends";


const Navbar = (data) => {

    return (
        <nav className={s.nav}>

            <div className={s.link + ' ' + s.profile}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.link + ' ' + s.messages}>
                <NavLink to='/messages' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.link + ' ' + s.news}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.link + ' ' + s.music}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.link + ' ' + s.settings}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.link + ' ' + s.friends}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                <RecentFriends recentFriends={data.recentFriends} />
            </div>
        </nav>
    );
}


export default Navbar;