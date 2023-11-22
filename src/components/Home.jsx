import React from 'react'
import { Carousel } from 'flowbite-react'
import oo9 from './../../src/assets/img/katsinaDG.jpeg'
import oo2 from '../assets/img/pic-removebg-preview.png'
import oo3 from '../assets/img/ICTLOGO.png'




const Home = () => {
  return (
    <div className=' world bg-NeutralHome px-4' id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel  indicators={false} className='w-full mx-auto'>
        <div className="mt-20 my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12" id='world'>
          <img src={oo2} alt='' className='world'/>
          {/* hero text */}
          <div className='text-base mb-20 md:text-sm sm:mb-10'>
              <h1 className='text-2md text-neutralSilver md:w-3/4 leading-normal  capitalize text-lg text-[123%] '>The First Industrial Revolution used water and steam power to mechanize production. The Second used electric power to create mass production. The Third used electronics and information technology to automate production.</h1>
              
          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <img src={oo9} alt="" className='object-fill:contain w-[400px]'/>
          {/* hero text */}
          <div className='md:w-1/2 mb-20'>
              <h1 className='capitalize text-2xl text-neutralSilver mb-5'>Sector by Sector Digitization </h1>
        <h1 className='capitalize text-lg text-[100%] '>Our journey begins with meticulous plans for planning and budgeting, paving the way for a digital transformation wave across education and health. KATDICT is on a mission, turning dreams into a tangible, tech-driven reality!</h1>
              
          </div>
        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <img src={oo3} alt="" className=''/>
          {/* hero text */}
          <div className='md:w-1/2'>
              <h1 className='capitalize text-1xl text-neutralSilver mb-5 text-2xl' >"Katsina is known as "Home of Hospitality" for too long, we will soon be known for technology and innovation."
</h1>
              <h1 className='capitalize text-xl leading-normal text-black font-bold '>- Naufal Ahmad
Director General, KATDICT</h1>
          </div>
        </div>
      </Carousel>
        </div>
      
    </div>
  )
}

export default Home
