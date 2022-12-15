import React from 'react'
import {SiChatbot} from "react-icons/si";
import {RiCustomerServiceFill} from "react-icons/ri";
import { FaVoicemail } from 'react-icons/fa';
import PopUps from './PopUps';

const SectionCards = () => {
  return (
    <div className='flex items-center justify-center mt-32'>
        <div className='grid grid-cols-grid-card gap-8 w-11/12 max-w-7xl px-8 sm:px-0 py-8'>
            <div className='relative contact_card'>
                <div className='grid place-items-center'>
        
                    <SiChatbot className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl font-bold mt-16 mb-8 capitalize'>chat with us</h2>
                <p className='text-xl font-semilight  mb-12'>We've got live Social Experts waiting to help you monday to friday from 9am to 5pm EST.</p>
                <div>
                    <button className='contact_button card'>chat with us</button>
                </div>

            </div>
            <div className='relative contact_card'>
                <div className='grid place-items-center'>
        
                    <FaVoicemail className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl font-bold mt-16 mb-8 capitalize'>Email Us</h2>
                <p className='text-xl font-semilight  mb-12'>Simple drop us an email at info@softzino.com and you'll receive a reply within 24 hours
                </p>
                <div>
                    <button className='contact_button card'>Email us</button>
                </div>
            </div>
            <div className='relative contact_card'>
                <div className='grid place-items-center'>
        
                    <RiCustomerServiceFill className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl font-bold mt-16 mb-8'>Give us a call</h2>
                <p className='text-xl font-semilight  mb-12'>Give us a call. Our Experts are standing by monday to friday from 9am to 5pm EST.</p>
                <div>
                    <button className='contact_button card'>call us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionCards;