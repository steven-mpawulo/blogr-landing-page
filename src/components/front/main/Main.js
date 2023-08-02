import React from 'react'
import Illustration from '../../../images/illustration-editor-desktop.svg'
import './main.css'
import SecondImage from '../../../images/illustration-phones.svg'
import ThirdImage from '../../../images/illustration-laptop-desktop.svg'
const Main = () => {
  return (
    <div className='main-container'>
        <h2>Designed for the future</h2>
        <div className="wrapper">
        <div className="right-container">
            <h3>Introducing an extensible editor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti asperiores ullam! Adipisci temporibus similique corporis provident dicta illo, officiis perferendis molestiae nemo doloribus delectus ipsum debitis eius tenetur vel!</p>
            <h3>Robust content management</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, laboriosam aspernatur architecto quidem laudantium, sunt inventore laborum velit fugit assumenda commodi esse! Magni quas incidunt libero dignissimos totam, voluptas ipsum!</p>
        </div>
        <div className="left-container">
            <img src={Illustration} alt="illustration" className='illustration' />
        </div>
        </div>
        <div className="second-container">
        <img src={SecondImage} alt="illustration phones"  className='second-image'/>
    
        <div className="second-inner-container">
            <h3 className='second-heading'>State of the Art Infrastructure</h3>
            <p className='second-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis est id eum exercitationem facilis quasi nam sint odit, reprehenderit cupiditate veniam et quas excepturi maiores recusandae. Cumque dolorem dolor sint.</p>
        </div>

    </div>

    <div className="third-container">
      <div className="left-container-in-third">
        <img src={ThirdImage} alt="laptop" className='third-image'/>
      </div>
      <div className="right-container-in-third">
        <h3>Free, Open, Simple</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ad est iste eum cumque culpa error enim quo magnam. Ipsum quae eveniet amet magni, sequi modi? Consequatur culpa facere at.</p>
      <h3>Powerful tooling</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus atque deleniti in maiores explicabo. Unde labore officiis, sed iste fuga porro, rem cupiditate id, explicabo sunt dolorem beatae! Magnam.</p>
      </div>
    </div>
        
    </div>
  )
}

export default Main