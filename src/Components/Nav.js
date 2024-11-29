import React from 'react'
import logo from "../assets/Logo.png"
import line from "../assets/line.png"
import { Link, useLocation} from 'react-router-dom'
const Nav = () => {
  const location=useLocation()
  const isActive=(path)=>location.pathname===path
  return (
 <header className='pt-10 flex justify-center'>
    <div className='flex justify-stretch items-center  xl:w-[576px] xl:ml-[20px] md:w-[160px] md:justify-center'>
    <img src={logo} className='mr-8 ml-8' width={48} height={48} alt='logo'/>
    <img src={line} className='w-[540px] h-[0.15rem] opacity-25 md:hidden xl:block'  alt='line'/>
    </div>
   <nav className='bg-white bg-opacity-10 h-[96px] xl:w-[946px] max-lg:w-[660px]'>
<ul className='text-white flex justify-center items-center h-full xl:space-x-36  md:space-x-16'>
    <li className='font-light'><Link to={"/"} className={isActive('/')?"border-b-2 p-9":"xl:hover:border-b-2 p-9"}><strong>00</strong> Home</Link></li>
    <li className='font-light'><Link to={"/destination"} className={isActive('/destination')?"border-b-2 p-9":"xl:hover:border-b-2 p-9"}><strong>01</strong> Destination</Link></li>
    <li className='font-light'><Link><strong>02</strong> Crew</Link></li>
    <li className='font-light'><Link><strong>03</strong> Technology</Link></li>
</ul>
   </nav>
 </header>
  )
}

export default Nav
