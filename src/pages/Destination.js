import React, { useState } from 'react'
import Nav from '../Components/Nav'
import { datas } from '../Components/PickedDestination'

const Destination = () => {

    const [active,setactive]=useState("Moon")
    const handlechange=(name)=>{
setactive(name)

    }
    const activeData= datas.find((data)=>data.Title===active)
  return (
<section className="xl:bg-[url('./assets/destination/background-destination-desktop.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg')] bg-cover bg-center bg-repeat-y h-[200vh]">

        <Nav/>
        <div className='w-[1110px] h-[792px] m-auto pt-12 mt-4'>
        <h2 className='uppercase text-white text-3xl'>  <span className='opacity-20 '>01</span>  Pick Your destination</h2>
        <div className='flex space-x-4 mt-[90px] p-10'>
<div className='w-[539px]'>
    <img src={activeData.img} alt={activeData.Title} className='w-[480px] h-[480px]'/>
</div>
<div className='w-[539px] items-center p-9 space-y-10'>
    <ul className='text-white flex justify-start space-x-7 '>
        <li><a href='#Moon' className={`uppercase font-light text-sm ${active==="Moon"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Moon")}>Moon</a></li>
        <li><a href='#Mars'className={`uppercase font-light text-sm ${active==="Mars"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Mars")}>Mars</a></li>
        <li><a href='#Europa'className={`uppercase font-light text-sm ${active==="Europa"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Europa")}>Europa</a></li>
        <li><a href='#Titan'className={`uppercase font-light text-sm ${active==="Titan"?"border-b-2 p-1":""}`} onClick={()=>handlechange("Titan")}>Titan</a></li>
    </ul>
    <div className='text-white w-[445px] h-[254px] space-y-9'>
    <h2 className='text-8xl font-light'>{activeData.Title}</h2>
    <p className='leading-7'>{activeData.description}</p>
   </div>
<hr className='opacity-30'/>
<div className='flex text-white space-x-20'>
<div className='space-y-4'> 
    <h2 className='font-light opacity-50'> AVG. DISTANCE</h2>
    <p className='text-2xl font-light'>{activeData.distance}</p>
</div>
<div className='space-y-4'>
<h2 className='font-light opacity-50'> Est. travel time</h2>
<p className='text-2xl font-light'>{activeData.traveltime}</p>
</div>
</div>
</div>
        </div>
        </div>
        
    </section>
  )
}

export default Destination
