import React from 'react'
import {NavLink} from 'react-router-dom'
import ent from '../Assets/ent.png'
const Header = () => {
  return (
    <div className='text-white p-5'>
       <div className=' flex mx-auto items-center justify-between'>
        <div className='flex gap-[10px] items-center'>
            <img src={ent} className=" w-5 md:w-10" />
            <p className=' text-[14px] md:text-[16px]'>Einstein Nnamah</p>
        </div>

        <nav className='flex gap-[20px] text-[14px] lg:text-[20px] md:text-[16px]'>
        <div>
        <NavLink ClassName='active' className='hover:font-[600] hover:text-[#5E3EEB] transition-[2s]' to="/">
          Home
          </NavLink >
        </div>
        <div> 
          <NavLink ClassName='active' className='hover:font-[600] hover:text-[#5E3EEB] transition-[2s]' to="/Portfolio">
          Repo
          </NavLink >
        </div>
        </nav>
        
       </div>
    </div>
  )
}

export default Header