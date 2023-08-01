import React from 'react'
import Logo from '../../../images/logo.svg'
import './header.css'

const Header = () => {
    return (
        <header >
            <div className="header">
                <div className='header-upper-section'>
                    <img src={Logo} alt="logo" className='logo' />
                    <nav>
                        <ul>
                            <li>Product</li>
                            <li>Company</li>
                            <li>Connect</li>
                        </ul>
                    </nav>
                    <button className='login'>Login</button>
                    <button className='signup'>Sign Up</button>
                </div>
                <div className="header-text">
                    <h1>A modern publishing platform</h1>
                    <p className='online-brand'>Grow you audience and build your online brand</p>
                </div>

                <div className="header-button-container">
                    <button className='start-for-free'>Start For Free</button>
                    <button className='learn-more'>Learn More</button>
                </div>

            </div>
        </header>

    )
}

export default Header