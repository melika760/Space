import React from 'react'
import logo from "../assets/Logo.png"
import line from "../assets/line.png"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
 <header className='pt-10 flex justify-center'>
    <div className='flex justify-stretch items-center  w-[576px] mr-[60px]'>
    <img src={logo} className='mr-8 ml-8' width={48} height={48} alt='logo'/>
    <img src={line} className='w-[540px] h-[0.15rem] opacity-25'  alt='line'/>
    </div>
   <nav className='bg-white bg-opacity-10 h-[96px] w-[906px] '>
<ul className='text-white flex justify-center items-center h-full space-x-36'>
    <li className='font-light'><Link><strong>00</strong> Home</Link></li>
    <li className='font-light'><Link><strong>01</strong> Destination</Link></li>
    <li className='font-light'><Link><strong>02</strong> Crew</Link></li>
    <li className='font-light'><Link><strong>03</strong> Technology</Link></li>
</ul>
   </nav>
 </header>
  )
}

export default Nav
