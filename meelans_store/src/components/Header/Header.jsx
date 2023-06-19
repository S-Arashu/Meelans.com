import React from 'react';
import '../Header/Header.css'

function Header() {
    return (
        <header className='header'>
        <video loop muted autoPlay controls = '' className='header__player' >
            <source src={require('../../video/room_-_74450 (Original).mp4')} type="video/mp4" />
        </video>

            <div className='header__container'>
                <div className='header__content'>
                    <nav className='header__navbar'>
                        <h2 className='header__burger'>Меню</h2>
                        <ul className='header__menu'>
                            <li><a href='#'>One</a></li>
                            <li><a href='#'>Two</a></li>
                            <li><a href='#'>Three</a></li>
                            <li><a href='#'>Four</a></li>
                            <li>
                                <span className='header__icon'>Search</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header