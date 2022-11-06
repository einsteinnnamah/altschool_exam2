import React from 'react'
import Header from '../Components/Header'

const LandingPage = () => {
  return (
    <div className='text-white h-screen'> 
      <div  className='lg:text-[50px] text-[30px] md:text-[40px] items-center flex flex-col text-center justify-center font-bold mt-20 '>
        Using Github Api to fetch  
        <br />
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#5E3EEB] relative inline-block'> <span className='relative text-white'>Portfolio</span> </span> 
      </div>
    </div>
  )
}

export default LandingPage