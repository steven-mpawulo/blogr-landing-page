import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Footer from './footer/Footer'
import './front.css'

const Front = () => {
  return (
    <div className='entire-page-container'>
    <Header/>
    <Main/>
    <Footer/>
    </div>
  )
}

export default Front