import React from 'react'
import Header from '../Components/Header'

const LandingPage = () => {
  return (
    <div className='text-white flex justify-center flex-col items-center'> 
      <div  className='lg:text-[50px] text-[30px] md:text-[40px] items-center flex flex-col text-center justify-center font-bold mt-20 '>
        Using Github Api to fetch  
        <br />
        <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#5E3EEB] relative inline-block'> <span className='relative text-white'>Portfolio</span> </span> 
      </div>

      <div className='mt-[20px] flex items-center flex-col'>
        <p className='text-center text-[24px] text-gray-900'>This website gives you access to some of the development <br /> projects i have worked on</p>
        <input className='bg-[#5E3EEB] p-5 rounded-sm' type="button" value="Let's Get Started" />
      </div>
    </div>
  )
}

export default LandingPage