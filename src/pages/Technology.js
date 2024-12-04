import React from 'react'
import PageLayout from '../Components/PageLayout'
import { techs } from '../Components/Constants'
import useActive from '../Components/use-active'
const Technology = () => {
  const{active,handlechange,activeData}=useActive("Launch",techs)
  return (
    <PageLayout space={"justify-between  mt-[80px] max-lg:mt-2"} num={"03"} des={"SPACE LAUNCH 101"} bgClass={"xl:bg-[url('./assets/technology/background-technology-desktop.jpg')] md:bg-[url('./assets/technology/background-technology-tablet.jpg')] bg-[url('./assets/technology/background-technology-mobile.jpg')]  h-[180vh]"} height={"h-[180vh]"}>
<div className='w-[768px] xl:hidden max-md:w-[372px]'>
  <img src={activeData.img2} alt={activeData.Title} className='w-full h-[600px]'/>
</div>
<div className='w-[635px] h-[304px] max-md:w-[372px] max-lg:w-[688px] flex items-center max-md:space-x-0  space-x-8 mt-[100px] relative max-lg:flex-col max-lg:items-center max-lg:space-y-11'>

<ul className='grid gap-[32px] items-center max-lg:flex'>
  {techs.map((item)=>(
    <li className={`border-[1px] border-white rounded-full w-[80px] h-[80px] text-center leading-[80px]  text-xl cursor-pointer ${active===item.Title?"bg-white text-blue-950":"text-white"}`} key={item.id} onClick={()=>handlechange(item.Title)}><a href={`#${item.Title}`} alt={item.Title} >{item.id}</a></li>
  ))}
  
  
</ul>
<div className='text-white w-[491px] h-[301px] grid gap-[24px] items-center max-lg:text-center max-md:w-[372px]'>
    <h3 className='text-3xl font-light uppercase opacity-50'>{activeData.job} </h3>
    <h2 className='text-6xl font-light uppercase max-md:text-5xl '>{activeData.Name}</h2>
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
