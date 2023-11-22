import React from 'react'
import logo1 from '../assets/img/p1.png'
import logo2 from '../assets/img/p2.png'
import logo3 from '../assets/img/p3.png'
import logo4 from '../assets/img/p6.png'
import logo5 from '../assets/img/p5.png' 

const Clients = () => {
  return (
    <section className='container' id='Partners'>
        <div className='md:px-14 py-4 max-w-screen-12 mx-auto justify-center items-center text-center mt-10 '>
            <div className='my-8'>
                <h2 className='text-4xl text-neutral-700 font-semibold mb-2 capitalize'>our Partners</h2>
                <p className='font-semibold capitalize mt-5 '>we have been working with some fortune 500 oranizations to make katsina great</p>

                {/* company logo */}
                <div className=' container my-12 flex flex-wrap sm:grid-cols-5 justify-between items-center gap-5'>
                    <img src={logo1} alt=""  className='w-[100px]' />
                    <img src={logo2} alt="" className='w-[100px]'  />
                    <img src={logo3} alt="" className='w-[100px]'/>
                    <img src={logo4} alt="" className='w-[100px]' />
                    <img src={logo5} alt="" className='w-[100px]' />
                    
                </div>
            </div>
        </div>
    </section>
  );
};

export default Clients
