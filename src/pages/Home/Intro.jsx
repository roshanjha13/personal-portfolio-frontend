import React from 'react'

const Intro = () => {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white '>Hi , I am </h1>
        <h1 className='text-7xl text-secondary font-semibold'>
            Roshan Kumar Jha 
        </h1>
        <h1 className='text-7xl text-white font-semibold'>
            I build things for the web 
        </h1>
        <p className='text-white w-2/3'>
            I am a Node.js Backend Developer , Currently I am
            Working as a Node.js Developer .Also Good Knowledge
            of React.js and Mongodb 
        </p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>
            Get Started
        </button>
    </div>
  )
}

export default Intro