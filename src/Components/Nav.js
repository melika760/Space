import React, { useState } from 'react'
import logo from "../assets/Logo.png"
import line from "../assets/line.png"
import { Link, useLocation} from 'react-router-dom'
const Nav = ({height}) => {
  const location=useLocation()
  const isActive=(path)=>location.pathname===path
  const[activeTab,settab]=useState(false)
  const handleClick=()=>{
    settab(!activeTab)
    
  }
  const closeOverlay = () => {
    settab(false);
  };
  return (
 <header className='pt-10 flex justify-center max-md:justify-between relative'>
    <div className='flex justify-stretch items-center  xl:w-[576px] xl:ml-[20px] md:w-[160px] md:justify-center w-[40px] '>
    <img src={logo} className='mr-8 ml-8' width={48} height={48} alt='logo'/>
    <img src={line} className='w-[540px] h-[0.15rem] opacity-25 max-lg:hidden xl:block'  alt='line'/>
    </div>
    <nav className="xl:hidden lg:hidden mr-2">
        <button
          onClick={handleClick}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
          aria-controls="navbar-hamburger"
          aria-expanded={activeTab}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {activeTab && (
        <div>
          <div className=' top-0 right-0 w-full fixed inset-0 bg-black bg-opacity-50 ' onClick={closeOverlay}></div>
           <div
            className={`absolute top-0 right-0 w-[60%] ${height} overflow-hidden   bg-black bg-opacity-30 backdrop-blur-sm`}
            id="navbar-hamburger"
            role="dialog"
          >
            <button onClick={closeOverlay} className='text-white float-right w-[50px] h-[50px]'>za</button>
            <ul className="grid grid-cols-1 gap-12 font-medium mt-[8rem] p-4 ">
              <li className="mb-2">
                <Link to="/" className={`text-3xl text-white font-light ${isActive("/")?"border-b-2 p-2":""}`} onClick={closeOverlay}>
                  00 Home
                </Link>
              </li>
              <li className="mb-2">
              <Link to="/destination" className={`text-3xl text-white font-light ${isActive("/destination")?"border-b-2 p-2":""}`} onClick={closeOverlay}>
                  01 Destination
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/crew" onClick={closeOverlay}>
                  Crew
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/technology" onClick={closeOverlay}>
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
         
        )}
      </nav>

   <nav className='bg-white bg-opacity-10 h-[96px] xl:w-[946px] max-lg:w-[660px] max-md:hidden'>
<ul className='text-white flex justify-center items-center h-full xl:space-x-12  md:space-x-0'>
    <li className='font-light'><Link to={"/"} className={isActive('/')?"border-b-2 p-9":"xl:hover:border-b-2 p-9"}><strong>00</strong> Home</Link></li>
    <li className='font-light'><Link to={"/destination"} className={isActive('/destination')?"border-b-2 p-9":"xl:hover:border-b-2 p-9"}><strong>01</strong> Destination</Link></li>
    <li className='font-light'><Link to={"/crew"} className={isActive('/crew')?"border-b-2 p-9":"xl:hover:border-b-2 p-9"}><strong>02</strong> Crew</Link></li>
    <li className='font-light'><Link to={"/technology"} className={isActive('/technology')?"border-b-2 p-9":"xl:hover:border-b-2 p-9"}><strong>03</strong> Technology</Link></li>
</ul>
   </nav>
 </header>
  )
}

export default Nav
