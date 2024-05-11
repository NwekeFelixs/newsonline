import React from 'react';
import { AiOutlineClose, } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MobileMenu = ({ show, closeMenu }) => {
    const handleCloseMenu = () => {
        closeMenu(); 
    };

    return (
        <div className={`mobile-menu ${show ? 'show' : ''}`}>
            <AiOutlineClose className='close-menu' onClick={handleCloseMenu} />
            <ul className='mobile-list'>
                <li className='mobile-item'>
                    <Link> Home </Link>
                </li>
                <li className='mobile-item'>
                    <Link> New </Link>
                </li>
                <li className='mobile-item'>
                    <Link>Popular </Link>
                </li>
                <li className='mobile-item'>
                    <Link>Trending </Link>
                </li>

                <li className='mobile-item'>
                    <Link>Categories </Link>
                </li>
            </ul>
        </div>
    );
};

export default MobileMenu;