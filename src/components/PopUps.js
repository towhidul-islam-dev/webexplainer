import React from 'react'
import { FaGithub,FaLinkedin,FaTwitter} from 'react-icons/fa'

const PopUps = () => {
  return (
    <div className='pop bg-white rounded-3xl max-w-max drop-shadow-xl'>
        <div className='p-8'>
            <h2 className='text-2xl font-semibold capitalize text-gray-700'>Towhidul Islam</h2>
            <p className='text-sm font-semibold text-gray-400 capitalize pt-3 pb-6'>Front-end Developer</p>
            <div className='flex items-center justify-center gap-4'>
                <li className='links linkedin'>
                    <FaLinkedin className='text-2xl' />
                </li>
                <li className='links github'>
                    <FaGithub className='text-2xl' />
                </li>
                <li className='links twitter'>
                    <FaTwitter className='text-2xl' />
                </li>
            </div>
        </div>
    </div>
  )
}

export default PopUps