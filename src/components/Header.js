import React from 'react'

const Header = ({Illustration, title, description}) => {
  return (
    <div className='relative flex items-center justify-center h-3/5 bg-gradient-to-bl from-color-3 to-color-5 py-8'>
      <div className='flex items-center justify-between gap-20 flex-col sm:flex-row w-11/12 px-6 md:px-4 lg:px-0 lg:w-full max-w-7xl mt-32 mb-60'>
        <div className='text-left'>
          <h2 className='text-3xl md:text-6xl font-bold text-gray-100 mb-6 capitalize'>{title}</h2>
          <p className='text-white capitalize text-xl max-w-md'>{description}</p>
        </div>
        <div className="w-96">
          <img src={Illustration} alt="" className='w-full block object-cover' />
        </div>
      </div>
      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>
  )
}

export default Header