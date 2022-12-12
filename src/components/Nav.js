import {Link, Outlet} from 'react-router-dom';
import React from 'react'
import Logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className='bg-gradient-to-lr py-3 flex items-center justify-center'>
        <div className='flex items-center justify-between gap-20 max-w-7xl sm:px-16 lg:px-0 w-full'>
            <div className='w-20'>
                <img src={Logo} alt="logo" />
            </div>
            <nav className='list-none text-gray-100 capitalize font-semibold flex gap-4'>
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
        </div>
        <Outlet />
    </div>
  )
}

export default Nav