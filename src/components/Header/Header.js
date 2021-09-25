import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            {/* <h1>HUNGRY BITE</h1> */}
            <nav>
                <div>
                    <h1>HUNGRY BITE</h1>
                </div>
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About us</a>
            </nav>
        </div>
    );
};

export default Header;