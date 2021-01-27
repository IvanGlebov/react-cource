import React from 'react'
import reactLogo from '../../logo.svg'
import s from './Header.module.css'

const Header = () => {
    return(
        <header className={s.header}>
            <img src={reactLogo} />
        </header>
    );
}

export default Header;