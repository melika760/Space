import React from 'react'
import { datas } from '../Components/Constants'
import PageLayout from '../Components/PageLayout'
import useActive from '../Components/use-active'

const Destination = () => {

const{active,handlechange,activeData}=useActive("Moon",datas)
  return (
<PageLayout space={"xl:space-x-4 max-md:space-y-[24rem] mt-[80px] max-lg:mt-2"}  height={"h-[220vh]"} num={"01"} des={"Pick Your destination"} bgClass={"xl:bg-[url('./assets/destination/background-destination-desktop.jpg')] md:bg-[url('./assets/destination/background-destination-tablet.jpg') bg-[url('./assets/destination/background-destination-mobile.jpg')] max-md:h-[220vh]  max-md:bg-repeat-x "}>
<div className='w-[539px] max-lg:p-9 max-md:w-[327px] max-md:h-[203px]'>
    <img src={activeData.img} alt={activeData.Title} className='w-[480px] h-[480px]'/>
</div>
<div className='w-[539px]  items-center p-9  space-y-10 max-md:w-[327px] max-md:p-0 '>
    <ul className='text-white flex justify-start space-x-7  max-lg:justify-center'>
        {datas.map((item)=>(<li key={item.Title}><a href={`#${item.Title}`} className={`uppercase font-light text-sm ${active===item.Title?"border-b-2 p-1":""}`} onClick={()=>handlechange(`${item.Title}`)}>{item.Title}</a></li>))}

    </ul>
   
    <div className='text-white w-[445px] max-md:w-[327px]  h-[254px] space-y-9 max-lg:text-center'>
    <h2 className='text-8xl font-light uppercase max-md:text-6xl'>{activeData.Title}</h2>
    <p className='leading-7'>{activeData.description}</p>
   </div>
<hr className='opacity-30'/>
<div className='flex text-white space-x-20 max-lg:justify-center max-md:flex-col max-md:items-center max-md:space-x-0 max-md:space-y-8'>
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
      
    
        
        </PageLayout>
  )
}

export default Destination
