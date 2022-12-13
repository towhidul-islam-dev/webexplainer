import React from 'react'
import { FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'

const PopUps = () => {
  return (
    <div className='pop bg-white rounded-3xl max-w-max drop-shadow-xl'>
        <div className='p-8'>
            <h2 className='text-3xl font-bold capitalize text-gray-700'>Towhidul Islam</h2>
            <p className='text-base font-bold text-gray-400 capitalize pt-4 pb-8'>Front-end Developer</p>
            <div className='flex items-center justify-center gap-4'>
                <li className='links'>
                    <FaLinkedin className='text-2xl' />
                </li>
                <li className='links'>
                    <FaGithub className='text-2xl' />
                </li>
                <li className='links'>
                    <FaTwitter className='text-2xl' />
                </li>
            </div>
        </div>
    </div>
  )
}

export default PopUps