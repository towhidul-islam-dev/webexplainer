import {Link, Outlet} from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react'
import Logo from "../assets/logo.png";
import { FaBars,FaCross} from 'react-icons/fa';
import { RxCross2} from 'react-icons/rx';

const Nav = () => {
    const [navWidth,setNavWidth] = useState(0);
    const [toggleNav , setToggleNav] = useState(true);
    const navRef = useRef(null);

    // ! Toggle Icon Functionality:::
    const toggleIcon = () => {
        setToggleNav(prevState => !prevState);
    }
    useEffect(() => {
        console.log(toggleNav);
    },[toggleNav])
    
    useEffect(() => {
        const property = navRef.current.getBoundingClientRect().width;
        const calcWidth = () => {
            setNavWidth(window.innerWidth);
        }
        window.addEventListener('resize',calcWidth);

        return () => {
            window.removeEventListener("resize", calcWidth);
        }
        
    },[navWidth])
  return (
    <>
    {
        toggleNav ? (<div ref={navRef} className='bg-gradient-to-lr py-3 flex items-center justify-center nav'>
        <div className='flex items-center justify-between gap-20 max-w-7xl px-4 sm:px-16 lg:px-0 w-full'>
                <div className='w-20'>
                    <img src={Logo} alt="logo" />
                </div>
            {
                navWidth <= 500 ? <FaBars onClick={toggleIcon} className="text-2xl text-white z-40" /> : <nav className='list-none text-gray-100 capitalize font-semibold flex gap-4'>
                <li className=''>
                    <Link className='border_animate cursor-pointer' to="/">
                        Homepage
                    </Link>
                </li>
                <li>
                    <Link className='border_animate cursor-pointer' to="/technology" >
                        Technology
                    </Link>
                </li>
                <li>
                    <Link className='border_animate cursor-pointer' to="/about" >
                        About
                    </Link>
                </li>
                <li>
                    <Link className='border_animate cursor-pointer' to="/contact"  >
                        Contact
                    </Link>
                </li>
            </nav>
            }
        </div>
        
    <Outlet />
    </div> ) : (
        <div ref={navRef} className='bg-gradient-to-lr flex items-center justify-center nav pt-4 pb-8 z-10'>
        <div className='flex flex-col items-center justify-between gap-20 max-w-7xl px-4 sm:px-16 lg:px-0 w-full'>
            <div className='w-full flex items-center justify-between gap-4'>
                <div className='w-20'>
                    <img src={Logo} alt="logo" />
                </div>
                <RxCross2 onClick={toggleIcon} className="text-3xl font-bold text-white z-40" />
            </div>
            
            <nav className='list-none text-gray-100 capitalize font-semibold flex gap-4 flex-col'>
                <li className=''>
                    <Link className='navLink navLink border_animate cursor-pointer' to="/">
                        Homepage
                    </Link>
                </li>
                <li>
                    <Link className='navLink navLink2 border_animate cursor-pointer' to="/technology" >
                        Technology
                    </Link>
                </li>
                <li>
                    <Link className='navLink navLink3 border_animate cursor-pointer' to="/about" >
                        About
                    </Link>
                </li>
                <li>
                    <Link className='navLink navLink4 border_animate cursor-pointer' to="/contact"  >
                        Contact
                    </Link>
                </li>
            </nav>
            
        </div>
        
    <Outlet />
    </div>
    ) 
    }
    </>
  )
}

export default Nav
