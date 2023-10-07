import React from 'react'
import Header from '../../components/Header/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='bg-primary px-40 sm:px-5'>
          <Intro />
          <About />
          <Experiences />
        </div>
    </div>
  )
}

export default Home