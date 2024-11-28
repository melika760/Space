import React from 'react'
import Nav from '../Components/Nav'
import moon from "../assets/destination/image-moon.png"
const Destination = () => {
  return (
<section className="xl:bg-[url('./assets/destination/background-destination-desktop.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg')] bg-cover bg-center bg-repeat-y h-[200vh]">

        <Nav/>
        <div className='w-[1110px] h-[792px] m-auto pt-12 mt-4'>
        <h2 className='uppercase text-white text-3xl'>  <span className='opacity-20 '>01</span>  Pick Your destination</h2>
        <div className='flex space-x-4 mt-[24px]'>
<div className=''>
    <img src={moon} alt='moon' className='w-[500px] h-[500px]'/>
</div>
        </div>
        </div>
        
    </section>
  )
}

export default Destination
