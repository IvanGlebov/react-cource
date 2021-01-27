import React from 'react'
import s from './Navbar.module.css'


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.link + ' ' + s.profile}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={s.link + ' ' + s.messages}>
                <a href='/messages'>Messages</a>
            </div>
            <div className={s.link + ' ' + s.news}>
                <a href='/news'>News</a>
            </div>
            <div className={s.link + ' ' + s.music}>
                <a href='/music'>Music</a>
            </div>
            <div className={s.link + ' ' + s.settings}>
                <a href='/settings'>Settings</a>
            </div>
        </nav>
    );
}


export default Navbar;