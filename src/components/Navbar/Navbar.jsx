import React from 'react'
import s from './Navbar.module.css'

function Navbar(){
    return(
        <nav className='nav'>
            <div className={`${s.link} ${s.profile}`}>
                <a href='#'>Profile</a>
            </div>
            <div className={`${s.link} ${s.messages}`}>
                <a href='#'>Messages</a>
            </div>
            <div className={`${s.link} ${s.news}`}>
                <a href='#'>News</a>
            </div>
            <div className={`${s.link} ${s.music}`}>
                <a href='#'>Music</a>
            </div>
            <div className={`${s.link} ${s.settings}`}>
                <a href='#'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;