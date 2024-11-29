import React, { useState } from 'react'
import PageLayout from '../Components/PageLayout'
import Mark from "../assets/crew/image-mark-shuttleworth.png"
const Crew = () => {
    const [active,setactive]=useState("Mark")
    const handlechange=(name)=>{
     setactive(name)
    }
    console.log(active)
  return (
<PageLayout bgClass={"xl:bg-[url('./assets/crew/background-crew-desktop.jpg')] md:bg-[url('./assets/crew/background-crew-tablet.jpg')] bg-repeat-y"}>
<div className='w-[1110px] h-[792px] m-auto pt-12 mt-4 max-lg:w-[688px]'>
<h2 className='uppercase text-white text-3xl'>  <span className='opacity-20 '>02</span>  Meet your crew</h2>
<div className='flex space-x-4 mt-[90px] p-10 max-lg:flex-col max-lg:space-y-8 max-lg:items-center'>
<div className='w-[539px] items-center  space-y-10 grid grid-cols-1 gap-[100px]'>
<div className='text-white w-[445px] h-[254px] space-y-9 max-lg:text-center'>
    <h3 className='text-3xl font-light uppercase opacity-50'>Mission Specialist </h3>
    <h2 className='text-6xl font-light uppercase '>MARK SHUTTLEWORTH </h2>
    <p className='leading-7 text-blue-200'>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
   </div>
   <ul className='text-white flex justify-start space-x-10 p-7  max-lg:justify-center cursor-pointer'>
        <li><a  href="#Mark" className={`text-6xl ${active==="Mark"?"opacity-100":"opacity-10"}`} onClick={()=>handlechange("Mark")}>.</a></li>
        <li><a  href="#Douglas" className={`text-6xl ${active==="Douglas"?"opacity-100":"opacity-10"}`} onClick={()=>handlechange('Douglas')}>.</a></li>
        <li><a  href="#Victor" className={`text-6xl ${active==="Victor"?"opacity-100":"opacity-10"}`} onClick={()=>handlechange('Victor')}>.</a></li>
        <li><a  href="#Anoshe" className={`text-6xl ${active==="Anoshe"?"opacity-100":"opacity-10"}`} onClick={()=>handlechange('Anoshe')}>.</a></li>
    </ul>
</div>
<div className='w-[539px]'>
    <img src={Mark} alt={"Mark"} className='w-full h-[640px]'/>
</div>
</div>
</div>
</PageLayout>
  )
}

export default Crew
