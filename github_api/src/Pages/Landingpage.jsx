import React from 'react'
import Header from '../Components/Header'

const Landingpage = () => {
  return (
    <div className='text-white'>
      <Header />
      <div className=' lg:text-[50px] flex justify-center font-bold mt-20'>
        <span className='text-[#5E3EEB]'>Halo,</span> I'm Einstein Nnamah
      </div>
      <div className='lg:text-[50px] flex justify-center font-bold '>
        Using Github Api to fetch Portfolio
      </div>
    </div>
  )
}

export default Landingpage