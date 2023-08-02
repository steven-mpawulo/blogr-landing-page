import React from 'react'
import FooterImage from '../../../images/illustration-phones.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <img src={FooterImage} alt="illustration phones"  className='footer-image'/>
    
        <div className="footer-inner-container">
            <h3 className='footer-heading'>State of the Art Infrastructure</h3>
            <p className='footer-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis est id eum exercitationem facilis quasi nam sint odit, reprehenderit cupiditate veniam et quas excepturi maiores recusandae. Cumque dolorem dolor sint.</p>
        </div>

    </div>
  )
}

export default Footer