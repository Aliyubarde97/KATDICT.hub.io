import React from 'react'

const Vedio = () => {
  return (
    <>
    <section className=' container bg-neutralSilver'>
        <div className='py-8 md:py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-8 '>
            <div className=' '>
            <iframe src="https://www.youtube.com/embed/-NYnDZGypA4" frameborder="0" className='aspect-video w-full cursor-pointer'
            title='youtube video player'
            allow='accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope;
            picture-inpicture; web-share '
            allowFullScreen>    
             </iframe>
            </div>
                <div className='flex flex-col items-center gap-4 text-center text-white
                md:col-span-2 md:items-start md:text-left sm:mt-10 '>
                        <h1 className='text-3xl font-bold capitalize'>
                        Digital Nigeria 2023.
                        </h1>
                        <p className='capitalize '>The DG of  KATDICT, Naufal Ahmad had the privilege of representing H.E, Mallam Dikko Umar Radda, PhD, the Executive Governor of Katsina State, at the Digital Nigeria Conference organized by NITDA under the Federal Ministry of Communications and Digital Economy..</p>
                </div>
                </div>
        </div>
    </section>
    </>
  )
}

export default Vedio
