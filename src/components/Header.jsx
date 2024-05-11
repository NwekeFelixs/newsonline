import React, { useState } from 'react'
import '../css/style.css'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import MobileMenu from './MobileMenu';
import Overlay from './Overlay';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };
  return (
    <div className='header'>
        <span className='logo'>
            <img src={logo} alt='logo' />
        </span>

        <ul className='navbar'>
            <li>
                <Link to='/'>Home</Link>
            </li>

            <li>
                <Link to='/'>New</Link>
            </li>

            <li>
                <Link to='/'>Popular</Link>
            </li>

            <li>
                <Link to='/'>Trending</Link>
            </li>

            <li>
                <Link to='/'>Categories</Link>
            </li>
        </ul>

        <AiOutlineMenu className={`menu-icon ${showMenu ? 'show' : ''}`} onClick={toggleMenu} /> 
            <MobileMenu show={showMenu} closeMenu={closeMenu} />
            <Overlay show={showMenu} onClick={closeMenu} />
    </div>
  )
}

export default Header