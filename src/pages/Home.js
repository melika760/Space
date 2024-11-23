import React from 'react'
import Nav from '../Components/Nav'

const Home = () => {
  return (
    <div className="xl:bg-[url('./assets/home/background-home-desktop.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg')] bg-cover bg-center h-screen overflow-hidden">
      <Nav/>
      <div className='xl:flex xl:justify-between  xl:h-[632px] xl:w-[1110px] md:w-[768px] md:h-[928px]  md:flex max-lg:flex-col md:justify-evenly m-auto items-center max-lg:text-center'>
        <div className=' text-white w-[540px] md:w-[512px] h-[343px] grid grid-cols-1 gap-5'><p className='uppercase font-light text-blue-200 leading-none'>So you want to travel to </p>
        <h2 className='font-light text-9xl leading-none'>Space</h2>
        <p className=' font-light text-blue-200 leading-6'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p></div>
        <button className='w-[272px] h-[272px] bg-white rounded-full text-4xl font-light'>Explore</button>
      </div>
    </div>
  )
}

export default Home
