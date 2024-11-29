import React, { useState } from 'react'
import { datas } from '../Components/Constants'
import PageLayout from '../Components/PageLayout'



const Destination = () => {

    const [active,setactive]=useState("Moon")
    const handlechange=(name)=>{
setactive(name)

    }
    const activeData= datas.find((data)=>data.Title===active)
  return (
<PageLayout bgClass={"xl:bg-[url('./assets/destination/background-destination-desktop.jpg')] md:bg-[url('./assets/destination/background-destination-tablet.jpg')]"}>
        <div className='w-[1110px] h-[792px] m-auto pt-12 mt-4 max-lg:w-[688px]'>
        <h2 className='uppercase text-white text-3xl'>  <span className='opacity-20 '>01</span>  Pick Your destination</h2>
        <div className='flex space-x-4 mt-[90px] p-10 max-lg:flex-col max-lg:space-y-8 max-lg:items-center'>
<div className='w-[539px] max-lg:p-9'>
    <img src={activeData.img} alt={activeData.Title} className='w-[480px] h-[480px]'/>
</div>
<div className='w-[539px] items-center p-9 space-y-10 '>
    <ul className='text-white flex justify-start space-x-7  max-lg:justify-center'>
        {datas.map((item)=>(<li key={item.Title}><a href={`#${item.Title}`} className={`uppercase font-light text-sm ${active===item.Title?"border-b-2 p-1":""}`} onClick={()=>handlechange(`${item.Title}`)}>{item.Title}</a></li>))}

    </ul>
   
    <div className='text-white w-[445px] h-[254px] space-y-9 max-lg:text-center'>
    <h2 className='text-8xl font-light uppercase'>{activeData.Title}</h2>
    <p className='leading-7'>{activeData.description}</p>
   </div>
<hr className='opacity-30'/>
<div className='flex text-white space-x-20 max-lg:justify-center'>
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
        
        </PageLayout>
  )
}

export default Destination
