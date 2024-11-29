import React from 'react'
import Nav from './Nav'

const PageLayout = ({children,bgClass}) => {
  return (
   <section className={`bg-cover bg-center ${bgClass} h-[150vh]`}>
    <Nav/>
    {children}
   </section>
  )
}

export default PageLayout
