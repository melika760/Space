import React from 'react'
import PageLayout from '../Components/PageLayout'
import { crewMembers } from '../Components/Constants'
import useActive from '../Components/use-active'


const Crew = () => {
  const{active,handlechange,activeData}=useActive("Douglas",crewMembers)
  return (
<PageLayout space={"space-x-4 mt-[80px] max-lg:mt-2"} num={"02"} des={"Meet your crew"} bgClass={"xl:bg-[url('./assets/crew/background-crew-desktop.jpg')] md:bg-[url('./assets/crew/background-crew-tablet.jpg')]  bg-[url('./assets/crew/background-crew-mobile.jpg')] bg-repeat-y max-lg:h-[135vh] overflow-hidden xl:h-[143vh]"}>
<div className='w-[539px] items-center  space-y-10 grid grid-cols-1 gap-[100px] max-lg:w-[482px]'>
<div className='text-white w-[445px] h-[254px] space-y-9 max-lg:text-center'>
    <h3 className='text-3xl font-light uppercase opacity-50'>{activeData.job} </h3>
    <h2 className='text-6xl font-light uppercase '>{activeData.Name} </h2>
    <p className='leading-7 text-blue-200 text-[18px]'>{activeData.description}</p>
   </div>
   <ul className='text-white flex justify-start space-x-10 p-7  max-lg:justify-center cursor-pointer'>
   {crewMembers.map((item)=>(<li key={item.Title}><a href={`#${item.Title}`} className={`text-7xl ${active===item.Title?"opacity-100":"opacity-10"}`} onClick={()=>handlechange(`${item.Title}`)}>.</a></li>))}
    </ul>
</div>
<div className='w-[539px] max-lg:W-[688px]'>
    <img src={activeData.img} alt={activeData.Name} className='w-[539px] h-[640px] max-lg:w-[446px] max-lg:h-[560px]'/>
</div>


</PageLayout>
  )
}

export default Crew
