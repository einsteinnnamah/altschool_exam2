import React from 'react'
import error from '../Assets/error.png'
import {Link} from 'react-router-dom'
const Error = () => {
  return (
    <div className='text-white flex flex-col items-center h-screen justify-center'>
       <p className='font-[700] text-[30px] text-red-500'>Oppss!!! </p>
        <img src={error} />
        <h1 className='mt-5'>
        We searched the entire web and couldn’t find this page. 
        </h1>
        <h2 className='mt-5'>
            Please click the button below to go to the home page
        </h2>
        <button className='bg-gray-500 px-5 py-2 rounded-full mt-5 text-white hover:bg-[#5E3EEB] transition-[.5s]' type='button' ><Link to="/">Back to Home page </ Link ></button>
    </div>
  )
}

export default Error