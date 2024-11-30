import React from 'react'
import PageLayout from '../Components/PageLayout'
import { techs } from '../Components/Constants'
import useActive from '../Components/use-active'
const Technology = () => {
  const{active,handlechange,activeData}=useActive("Launch",techs)
  return (
    <PageLayout space={"justify-between"} num={"03"} des={"SPACE LAUNCH 101"} bgClass={"xl:bg-[url('./assets/technology/background-technology-desktop.jpg')] md:bg-[url('./assets/technology/background-technology-tablet.jpg')] h-[150vh]"}>
<div className='w-[635px] h-[304px] flex items-center space-x-8 mt-[100px] relative '>
<ul className='grid gap-[32px] '>
  {techs.map((item)=>(
    <li className={`border-[1px] border-white rounded-full w-[80px] h-[80px] text-center leading-[80px] text-white text-xl cursor-pointer ${active===item.Title?"bg-white text-black":""}`} key={item.id} onClick={()=>handlechange(item.Title)}><a href={`#${item.Title}`} alt={item.Title} >{item.id}</a></li>
  ))}
  
  
</ul>
<div className='text-white w-[491px] h-[301px] grid gap-[24px] max-lg:text-center'>
    <h3 className='text-3xl font-light uppercase opacity-50'>{activeData.job} </h3>
    <h2 className='text-6xl font-light uppercase '>{activeData.Name}</h2>
    <p className='leading-7 text-blue-200 text-[18px]'>{activeData.description}</p>
   </div>
</div>
<div className='w-[608px]  absolute right-0 max-lg:hidden'>
  <img src={activeData.img2} alt={activeData.Title} className='w-[608px] h-[600px]'/>
</div>
    </PageLayout>
  )
}

export default Technology
