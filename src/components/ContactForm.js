import React from 'react'
import Illustration from "../assets/illustration10.svg";

const ContactFrom = () => {
  return (
    <>
        <div className='flex items-center justify-center py-8 mt-20'>
            <h2 className='text-center  text-3xl md:text-5xl font-semibold max-w-4xl capitalize'>Talk to Our Sales & Marketing
Department Team</h2>
        </div>
        <div className='flex items-center justify-center flex-col'>
            <div className='max-w-7xl w-11/12 grid grid-cols-technology-card gap-12 lg:gap-28 place-items-center my-28 p-6 sm:p-0'>
                <div className='max-w-2xl'>
                    <img loading='lazy' className='w-full block object-cover' src={Illustration} alt="" />
                </div>
                <div className='w-full'>
                    <form action="">
                        <div className='flex items-center justify-between gap-2 w-full'>
                            <input type="text" placeholder='first name' className='w-full border border-gray-400 placeholder:capitalize py-2 px-2 rounded-md mb-4'  />
                            <input type="text" placeholder='last name' className='w-full border border-gray-400 placeholder:capitalize py-2 px-2 rounded-md mb-4' />
                        </div>
                        <div className='flex items-center justify-between gap-2 w-full'>
                            <input type="text" placeholder='phone' className='w-full border border-gray-400 placeholder:capitalize py-2 px-2 rounded-md mb-4' />
                            <input type="text" placeholder='email' className='w-full border border-gray-400 placeholder:capitalize py-2 px-2 rounded-md mb-4' />
                        </div>
                        <div className='mb-4 w-full'>
                            <textarea name="w3review" rows="7" cols="50" placeholder='message' className='border border-gray-400 placeholder:capitalize py-2 px-4 rounded-md w-full'>
                            </textarea>
                        </div>
                        <div>
                            <button className='contact_button card px-16'>send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactFrom;