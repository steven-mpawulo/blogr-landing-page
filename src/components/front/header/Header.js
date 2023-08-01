import React from 'react'
import Logo from '../../../images/logo.svg'

const Header = () => {
  return (
    <header>
        <div className='header'>
        <img src={Logo} alt="logo" className='logo'/>
        <nav>
        <ul>
            <li>Product</li>
            <li>Company</li>
            <li>Connect</li>
        </ul>
        </nav>

        <button className='login'>Login</button>
        <button className='signup'>Sign Up</button>
        <h1>A modern publishing platform</h1>
        <p className='online-brand'>Grow you audience and build your online brand</p>

    </div>
    </header>
    
  )
}

export default Header