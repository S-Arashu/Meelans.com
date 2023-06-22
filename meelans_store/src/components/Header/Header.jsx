import React from 'react';
import '../Header/Header.css'

import { PiBookmarkSimpleDuotone } from "react-icons/pi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";

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
                            <li>
                                <span className='header__icon'>Search</span>
                            </li>
                            <li><a href='#!'><PiBookmarkSimpleDuotone className='header__bookmark'/></a></li>
                            <li><a href='#!'><PiShoppingCartSimpleDuotone className='header__shopCart' /></a></li>
                            <li><a href='#!'>Личный кабинет</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header