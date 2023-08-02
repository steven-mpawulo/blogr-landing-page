import React from 'react'
import Logo from '../../../images/logo.svg'
import './footer.css'


const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-first-container">
                <img src={Logo} alt="logo" />
            </div>
            <div className="footer-second-container">
                <h4>Product</h4>
                <ul>
                    <li><a href="#Overview">Overview</a></li>
                    <li><a href="#Pricing">Pricing</a></li>
                    <li><a href="#Market Place">Market Place</a></li>
                    <li><a href="#Features">Features</a></li>
                    <li><a href="#Integrations">Integrations</a></li>
                </ul>
            </div>
            <div className="footer-fourt-container">
                <h4>Company</h4>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Team">Team</a></li>
                    <li><a href="#Blog">Blog</a></li>
                    <li><a href="Careers">Careers</a></li>
                </ul>
            </div>
            <div className="footer-third-container">
                <h4>Connect</h4>
                <ul>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#Newsletter">Newsletter</a></li>
                    <li><a href="#Linkedin">Linkedin</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer