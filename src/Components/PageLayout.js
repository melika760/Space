import React from 'react'
import Nav from './Nav'

const PageLayout = ({children,bgClass,num,des,space,height}) => {
  return (
   <section className={`bg-cover bg-center ${bgClass} h-[150vh]`}>
    <Nav height={height}/>
    <div className='xl:w-[1110px] xl:h-[792px] m-auto pt-12 mt-4 max-lg:w-[688px] max-md:w-[372px] h-[792px]'>
        <h2 className='uppercase text-white text-3xl max-md:text-2xl max-md:text-center'>  <span className='opacity-20 '>{num}</span>  {des}</h2>
        <div className={`flex ${space}  p-10  max-lg:flex-col max-lg:space-y-8 max-lg:items-center`}>
        {children}
        </div>
    
    </div>
   </section>
  )
}

export default PageLayout
