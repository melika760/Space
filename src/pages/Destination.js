import React, { useState } from 'react'
import Nav from '../Components/Nav'
import moon from "../assets/destination/image-moon.png"
import { useLocation } from 'react-router-dom'
const Destination = () => {
    const datas=[
        {img:moon,
Title:"Moon",
description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
distance:"384,400 KM",
traveltime:"3 days"
        }
    ]
    const [active,setactive]=useState("Moon")
    const params=useLocation()
    console.log(params)
    const handlechange=(name)=>{
setactive(name)
    }
  return (
<section className="xl:bg-[url('./assets/destination/background-destination-desktop.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg')] bg-cover bg-center bg-repeat-y h-[200vh]">

        <Nav/>
        <div className='w-[1110px] h-[792px] m-auto pt-12 mt-4'>
        <h2 className='uppercase text-white text-3xl'>  <span className='opacity-20 '>01</span>  Pick Your destination</h2>
        <div className='flex space-x-4 mt-[90px] p-10'>
<div className='w-[539px]'>
    <img src={moon} alt='moon' className='w-[480px] h-[480px]'/>
</div>
<div className='w-[539px] items-center p-9 space-y-10'>
    <ul className='text-white flex justify-start space-x-7 '>
        <li><a href='#moon' className={`uppercase font-light text-sm ${active==="Moon"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Moon")}>Moon</a></li>
        <li><a href='#mars'className={`uppercase font-light text-sm ${active==="Mars"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Mars")}>Mars</a></li>
        <li><a href='#eurpa'className={`uppercase font-light text-sm ${active==="Europa"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Europa")}>Europa</a></li>
        <li><a href='#titan'className={`uppercase font-light text-sm ${active==="Titan"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Titan")}>Titan</a></li>
    </ul>
    <div className='text-white w-[445px] h-[254px] space-y-9'>
    <h2 className='text-8xl font-light'>Moon</h2>
    <p className='leading-7'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
   </div>
<hr className='opacity-30'/>
<div className='flex text-white'>
<div className='space-y-4'> 
    <h2 className='font-light opacity-50'> AVG. DISTANCE</h2>
    <p className='text-2xl font-light'>384,400 KM</p>
</div>
</div>
</div>
        </div>
        </div>
        
    </section>
  )
}

export default Destination
