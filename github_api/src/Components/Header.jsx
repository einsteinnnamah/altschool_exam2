import React from 'react'
import ent from '../Assets/ent.png'
const Header = () => {
  return (
    <div className='text-white mx-auto  p-5 xl:w-[1440px] '>
       <div className=' flex mx-auto items-center justify-between'>
        <div className='flex gap-[10px] items-center'>
            <img src={ent} className=" w-5 md:w-10" />
            <p className=' text-[14px] md:text-[16px]'>Einstein Nnamah</p>
        </div>

        <nav className='flex gap-[20px] text-[14px]'>
        <div>Samasa</div>
        <div>Sasdf</div>
        </nav>
        
       </div>
    </div>
  )
}

export default Header