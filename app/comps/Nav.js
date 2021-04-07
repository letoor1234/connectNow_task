import React from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom'
const Nav = (props)=>{
    let location= useLocation()
    return(
        
        <header>
            <ul className='nav'>
                <label className={`menu-btn ${location.pathname==='/'?'menu-btn-active menu-btn-video':''}`}>
                    <Link to='/' id='video'>VIDEO GAMES</Link>
                </label>
                <label className={`menu-btn ${location.pathname==='/contact'?'menu-btn-active menu-btn-contact':''}`}>
                    <Link to='/contact' id='contact'>CONTACT </Link>
                </label>
            </ul>
        </header>
    )
}

export default Nav 