import React from 'react'
import Header from '../../components/Header/Header'
import Intro from './Intro'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import Education from './Education'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='bg-primary px-40 sm:px-5'>
          <Intro />
          <About />
          <Experiences />
          <Projects/>
          <Education />
        </div>
    </div>
  )
}

export default Home