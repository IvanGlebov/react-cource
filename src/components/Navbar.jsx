import React from 'react'
import './css/Navbar.css'

function Navbar(){
    return(
        <nav className='nav'>
            <div className='link profile'>
                <a href='#'>Profile</a>
            </div>
            <div className='link messages'>
                <a href='#'>Messages</a>
            </div>
            <div className='link news'>
                <a href='#'>News</a>
            </div>
            <div className='link music'>
                <a href='#'>Music</a>
            </div>
            <div className='link setting'>
                <a href='#'>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;