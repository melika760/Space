import React from 'react'
import PageLayout from '../Components/PageLayout'
import tech from "../assets/technology/image-launch-vehicle-landscape.jpg"
const Technology = () => {
  return (
    <PageLayout space={"justify-between"} num={"03"} des={"SPACE LAUNCH 101"} bgClass={"xl:bg-[url('./assets/technology/background-technology-desktop.jpg')] md:bg-[url('./assets/technology/background-technology-tablet.jpg')] h-[150vh]"}>
<div className='w-[635px] h-[304px] flex space-x-8 relative'>
<ul className='grid gap-[32px]'>
    <li className='border-[1px] border-white rounded-full w-[80px] h-[80px] text-center leading-[80px] text-white text-xl'>1</li>
    <li className='border-[1px] border-white rounded-full w-[80px] h-[80px] text-center leading-[80px] text-white text-xl'>1</li>
    <li className='border-[1px] border-white rounded-full w-[80px] h-[80px] text-center leading-[80px] text-white text-xl'>1</li>
  
</ul>
<div className='text-white w-[491px] h-[301px] grid gap-[24px] max-lg:text-center'>
    <h3 className='text-3xl font-light uppercase opacity-50'>THE TERMINOLOGY… </h3>
    <h2 className='text-6xl font-light uppercase '>LAUNCH VEHICLE</h2>
    <p className='leading-7 text-blue-200 text-[18px]'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
   </div>
</div>
<div className='w-[608px]  text-center absolute right-0 '>
  <img src={tech} alt={tech} className='w-[608px] h-[600px]'/>
</div>
    </PageLayout>
  )
}

export default Technology
