import React, { useEffect, useState } from 'react'
import logo from '../assets/img/ICTLOGO.png'
import { Link } from 'react-scroll';
import path from 'path';
import { FaXmark, FaBars } from "react-icons/fa6";


const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);
  const[isSticky, setIsSticky] = useState(false);
   
    // set toggle Menu
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsSticky(true)
      }
      else{
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  

    return () => {
      window.addEventListener('scroll', handleScroll);
    }
    
  });
  //  navitems array
    const NavItems = [
      {link: "Home", path: "home"},
      {link: "Portfolio", path: "Portfolio"},
      {link: "Activities", path: "Activities"},
      {link: "Partners", path: "Partners"},
      {link: "About", path: "About"},
    ];
    console.log(NavItems)
     
    function Header() {

      const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
 
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-5 lg:px-10 px-4  ${isSticky ? "sticky top-0 left-0 right-0 border bg-white duration-300":""}`}>
          <div className='flex justify-center items-center text-base gap-8'>
            <a href="" className=''><img src={logo} alt="" className='w-100 h-12 aut0 mr-10' /></a>
            <ul className='md:flex space-x-12 hidden'>
              {
               NavItems.map(({link, path}) =><Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-neutralSilver hover:text-black first:font-medium cursor-pointer '>{link}</Link>)
              }
            </ul>

            {/* btn for large devices
            <div className='space-x-12 hidden lg:flex items-center'>
              <a href="" className='hidden lg:flex items-center text-neutralSilver hover:text-black'>login</a>
                <button className='  bg-neutralSilver text-white py-2 px-4 transition-all duration-300 rounded hover:bg-slate-500'>sign up</button>
            </div> */}
           {/* menu btn for only mobile devices */}
           <div className='md:hidden'>
                  <button 
                  onClick={toggleMenu}
                  className='focus:outline-none focus:text-grey-500 ml-10'>
                    {
                      isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
                    }

                  </button>
           </div>
          </div>
          <div className={`space-y-8 px-4 mt-23 py-10 bg-neutralSilver ${isMenuOpen ? "top-0 right-0 left-0" : "hidden" }`}>
           {
               NavItems.map(({link, path}) =><Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-black first:font-medium'>{link}</Link>)
              }

           </div>
      </nav>
    </header>
   
  )
 
 
            }
          }
 

export default Navbar
