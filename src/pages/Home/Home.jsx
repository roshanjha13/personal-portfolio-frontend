import React from 'react'
import Header from '../../components/Header/Header'
import Intro from './Intro'

const Home = () => {
  return (
    <div>
        <Header/>
        <div className='bg-primary px-40'>
          <Intro />
        </div>
    </div>
  )
}

export default Home