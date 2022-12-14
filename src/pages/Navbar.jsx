import React from 'react'
import Nav from '../components/Nav'

const Navbar = () => {
  return (
    <>
      <div className='fixed top-0 left-0 z-40 w-full'>
        <Nav />
      </div>
    </>
  )
}

export default Navbar