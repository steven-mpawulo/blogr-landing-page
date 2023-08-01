import React from 'react'
import Illustration from '../../../images/illustration-editor-desktop.svg'
const Main = () => {
  return (
    <div className='main-container'>
        <h2>Designed for the future</h2>
        <div className="right-container">
            <h3>Introducing an extensible editor</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deleniti asperiores ullam! Adipisci temporibus similique corporis provident dicta illo, officiis perferendis molestiae nemo doloribus delectus ipsum debitis eius tenetur vel!</p>
            <h3>Robust content management</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, laboriosam aspernatur architecto quidem laudantium, sunt inventore laborum velit fugit assumenda commodi esse! Magni quas incidunt libero dignissimos totam, voluptas ipsum!</p>
        </div>
        <div className="left-container">
            <img src={Illustration} alt="illustration" />
        </div>
        <div className="left-container"></div>
    </div>
  )
}

export default Main