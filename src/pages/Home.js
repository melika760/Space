import React from 'react'
import Nav from '../Components/Nav'

const Home = () => {
  return (
    <div className="lg:bg-[url('./assets/home/background-home-desktop.jpg')]md:bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover bg-center h-screen overflow-hidden">
      <Nav/>
      <div className='flex justify-between items-center h-[632px] w-[1110px] m-auto '>
        <div className=' text-white w-[540px] h-[343px] grid grid-cols-1 gap-5'><p className='uppercase font-light text-blue-200 leading-none'>So you want to travel to </p>
        <h2 className='font-light text-9xl leading-none'>Space</h2>
        <p className=' font-light text-blue-200 leading-6'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p></div>
        <button className='w-[272px] h-[272px] bg-white rounded-full text-4xl font-light'>Explore</button>
      </div>
    </div>
  )
}

export default Home
