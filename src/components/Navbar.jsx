import React from 'react'
import './css/Navbar.css'

function Navbar(){
    return(
        <nav className='nav'>
            <div className='link profile'>
                <a>Profile</a>
            </div>
            <div className='link messages'>
                <a>Messages</a>
            </div>
            <div className='link news'>
                <a>News</a>
            </div>
            <div className='link music'>
                <a>Music</a>
            </div>
            <div className='link setting'>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;