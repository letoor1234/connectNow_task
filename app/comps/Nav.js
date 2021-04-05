import React from 'react';
import {
    Link
} from 'react-router-dom';

const Nav = (props)=>{


    return(
        <header>
            <ul>
                <Link to='/' class='menu-btn'>
                    <label id='video'>VIDEO GAMES</label>
                </Link>
                <Link to='/contact'class='menu-btn'>
                    <label id='contact'>CONTACT </label>
                </Link>
            </ul>
        </header>
    )
}

export default Nav