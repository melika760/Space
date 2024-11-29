import React from 'react'
import Nav from './Nav'

const PageLayout = ({children,bgClass,num,des}) => {
  return (
   <section className={`bg-cover bg-center ${bgClass} h-[150vh]`}>
    <Nav/>
    <div className='w-[1110px] h-[792px] m-auto pt-12 mt-4 max-lg:w-[688px]'>
        <h2 className='uppercase text-white text-3xl'>  <span className='opacity-20 '>{num}</span>  {des}</h2>
      {children}
    </div>
   </section>
  )
}

export default PageLayout
