import React from 'react'
import Button1 from '../components/Buttons'
import '../styles/pages/home.css'

const Home = () => {
  return (
        <div className='home-page'>
            <div className='home-page__text-box'>
                <div className='home-page__text-box--header mb-3 text-center text-4xl px-2 py-4 font-bold rounded'>
                  <h1>WELCOME TO THE NAFDAC E-PORTAL</h1>
                </div>
                <div className='home-page__button'>
                  <Button1 text="GET STARTED" class='button1 rounded'></Button1>
                </div>
            </div>
        </div>
  )
}

export default Home
