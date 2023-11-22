import React from 'react'
import { Footer } from 'flowbite-react';
import {BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import logoF from '../assets/img/ICTLOGOF.png'


const MyFooter = () => {
  return (
    <section className='container text-white' id='About' >
        <Footer container className=' bg-neutralSilver text-white'>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='cursor-pointer '>
           
          <img src={logoF} alt="" className='text-white' />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className='text-white font-bold'/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className=' text-white'>KATDICT</Footer.Link>
                <Footer.Link href="#" className=' text-white capitalize'>innovations</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='text-white font-bold' />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className=' text-white'>FaceBook</Footer.Link>
                <Footer.Link href="#" className=' text-white'>Twiter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='text-white font-bold' />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className=' text-white'>Privacy Policy</Footer.Link>
                <Footer.Link href="#" className=' text-white'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="KATDICT™" year={2023}  className='text-white font-bold'/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" className=' text-white' icon={BsFacebook} />
            <Footer.Icon href="#" className=' text-white' icon={BsInstagram} />
            <Footer.Icon href="#"className='  text-white' icon={BsTwitter} />
            
          </div>
        </div>
      </div>
    </Footer>

    </section>
  )
}

export default MyFooter
