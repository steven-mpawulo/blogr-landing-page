import React from 'react'
import FooterImage from '../../../images/illustration-phones.svg'

const Footer = () => {
  return (
    <div className="footer">
        <img src={FooterImage} alt="illustration phones" />
        <div className="footer-inner-container">
            <p>State of the Art Infrastructure</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis est id eum exercitationem facilis quasi nam sint odit, reprehenderit cupiditate veniam et quas excepturi maiores recusandae. Cumque dolorem dolor sint.</p>
        </div>

    </div>
  )
}

export default Footer