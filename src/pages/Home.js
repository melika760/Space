import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'

const Home = () => {
  return (
  <section className="xl:bg-[url('./assets/home/background-home-desktop.jpg')] md:bg-[url('./assets/home/background-home-tablet.jpg') bg-[url('./assets/home/background-home-mobile.jpg')]  h-[110vh] bg-cover bg-center bg-repeat-y overflow-hidden max-xs:h-[130vh] ">
    <Nav height={"h-[130vh]"}/>
      <div className='flex xl:justify-between h-[632px]  max-xs:h-[632px] xl:w-[1110px]  max-md:h-[928px]  md:flex max-lg:flex-col  md:mt-[9rem] max-xs:mt-[9rem]  justify-evenly  xl:mt-0 text-center  m-auto items-center w-[323px]'>
        <div className=' text-white xl:w-[540px] md:w-[512px] h-[343px] grid grid-cols-1 gap-5'><p className='uppercase font-light text-blue-200 leading-none '>So you want to travel to </p>
        <h2 className='font-light text-9xl leading-none max-md:text-5xl'>Space</h2>
        <p className=' font-light text-blue-200 leading-6'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! </p></div>
        <button className='w-[272px] h-[272px] max-md:w-[220px] max-md:h-[220px] bg-white rounded-full text-4xl font-light '><Link to={"/destination"}>Explore</Link></button>
      </div>
      </section>
  )
}

export default Home
