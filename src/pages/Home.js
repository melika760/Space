import React from 'react'
import Nav from '../Components/Nav'

const Home = () => {
  return (
    <div className="bg-[url('./assets/home/background-home-desktop.jpg')] bg-cover bg-center h-screen">
      <Nav/>
      <div className='flex justify-evenly items-center justify-items-center'>
        <div>content</div>
        <button>Explore</button>
      </div>
    </div>
  )
}

export default Home
