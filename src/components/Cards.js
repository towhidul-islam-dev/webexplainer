import React from 'react'
import {DiWebplatform} from "react-icons/di";
import {GoRocket} from "react-icons/go";
import {IoDesktop} from "react-icons/io";
import {SiZendesk} from "react-icons/si";
import {GiSpadeSkull,GiDesk} from "react-icons/gi";
import {BsCircle,BsCircleFill} from "react-icons/bs";
import {CgShapeHexagon} from "react-icons/cg";

/* 
#14342B
#60935D
#BAB700
#BBDFC5
#FF579F
 */

const Cards = () => {
  return (
    <div className='flex items-center justify-center mt-32'>
        <div className='grid grid-cols-grid-card gap-8 w-full max-w-7xl px-8 sm:px-0 py-8'>
            <div className='relative card bg-gray-100 drop-shadow-lg rounded-md p-10'>
                <div className='grid place-items-center'>
        
                    <DiWebplatform className='text-8xl p-4 border-4 rounded-md border-[#60935D] text-[#60935D]'/>
                </div>
                <h2 className='text-3xl text-bold mt-16 mb-8'>Website Development</h2>
                <p className='text-xl font-semilight mb-12'>Our creative and talented team of designers as well as skilled technical developers will build your site to order. We have experience creating web solutions for businesses which</p>
                <div className='absolute top-7 right-5'>
                    <BsCircle className='text-4xl text-[#BBDFC5]'/>
                    <BsCircle className='ml-4 -mt-3 text-2xl text-[#BBDFC5]' />
                </div>
                <div className='absolute bottom-10 right-8'>
                    <CgShapeHexagon className='text-5xl text-[#BAB700]' />
                </div>
                <div className='absolute top-12 left-7 text-3xl text-gradient-to-lr'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
                <div className='absolute bottom-7 left-12'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
            </div>
            <div className='relative card bg-gray-100 drop-shadow-lg rounded-md p-10'>
                <div className='grid place-items-center'>
        
                    <GiDesk className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl text-bold mt-16 mb-8'>Long Term Maintenance and Support Service</h2>
                <p className='text-xl font-semilight mb-12'>Let us translate your concept into a great user experience and highly usable user interface, whether it’s a web, mobile application or a corporate website.</p>
                <div className='absolute top-7 right-5'>
                    <BsCircle className='text-4xl text-[#BBDFC5]'/>
                    <BsCircle className='ml-4 -mt-3 text-2xl text-[#BBDFC5]' />
                </div>
                <div className='absolute bottom-10 right-8'>
                    <CgShapeHexagon className='text-5xl text-[#BAB700]' />
                </div>
                <div className='absolute top-12 left-7 text-3xl text-gradient-to-lr'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
                <div className='absolute bottom-7 left-12'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
            </div>
            <div className='relative card bg-gray-100 drop-shadow-lg rounded-md p-10'>
                <div className='grid place-items-center'>
        
                    <SiZendesk className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl text-bold mt-16 mb-8'>UX-UI Design</h2>
                <p className='text-xl font-semilight  mb-12'>We build fast, scalable and secure Ruby on Rails or PHP back-end applications with integrated external APIs or custom one built according to your requirements.</p>
                <div className='absolute top-7 right-5'>
                    <BsCircle className='text-4xl text-[#BBDFC5]'/>
                    <BsCircle className='ml-4 -mt-3 text-2xl text-[#BBDFC5]' />
                </div>
                <div className='absolute bottom-10 right-8'>
                    <CgShapeHexagon className='text-5xl text-[#BAB700]' />
                </div>
                <div className='absolute top-12 left-7 text-3xl text-gradient-to-lr'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
                <div className='absolute bottom-7 left-12'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
            </div>
            <div className='relative card bg-gray-100 drop-shadow-lg rounded-md p-10'>
                <div className='grid place-items-center'>
        
                    <GoRocket className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl text-bold mt-16 mb-8'>Backend Development</h2>
                <p className='text-xl font-semilight  mb-12'>We can bring your online business to the next level by creating a high-quality Shopify, Big Commerce or e-Commerce online stores for ecommerce solutions.</p>
                <div className='absolute top-7 right-5'>
                    <BsCircle className='text-4xl text-[#BBDFC5]'/>
                    <BsCircle className='ml-4 -mt-3 text-2xl text-[#BBDFC5]' />
                </div>
                <div className='absolute bottom-10 right-8'>
                    <CgShapeHexagon className='text-5xl text-[#BAB700]' />
                </div>
                <div className='absolute top-12 left-7 text-3xl text-gradient-to-lr'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
                <div className='absolute bottom-7 left-12'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
            </div>
            <div className='relative card bg-gray-100 drop-shadow-lg rounded-md p-10'>
                <div className='grid place-items-center'>
        
                    <GiSpadeSkull className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl text-bold mt-16 mb-8'>E-commerce Web Development</h2>
                <p className='text-xl font-semilight  mb-12'>We can bring your online business to the next level by creating a high-quality Shopify, Big Commerce or e-Commerce online stores for ecommerce solutions.</p>
                <div className='absolute top-7 right-5'>
                    <BsCircle className='text-4xl text-[#BBDFC5]'/>
                    <BsCircle className='ml-4 -mt-3 text-2xl text-[#BBDFC5]' />
                </div>
                <div className='absolute bottom-10 right-8'>
                    <CgShapeHexagon className='text-5xl text-[#BAB700]' />
                </div>
                <div className='absolute top-12 left-7 text-3xl text-gradient-to-lr'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
                <div className='absolute bottom-7 left-12'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
            </div>
            <div className='relative card bg-gray-100 drop-shadow-lg rounded-md p-10'>
                <div className='grid place-items-center'>
        
                    <DiWebplatform className='text-8xl p-4 text-[#60935D] border-4 rounded-md border-[#60935D]'/>
                </div>
                <h2 className='text-3xl text-bold mt-16 mb-8'>Website Development</h2>
                <p className='text-xl font-semilight  mb-12'>Our creative and talented team of designers as well as skilled technical developers will build your site to order. We have experience creating web solutions for businesses which</p>
                <div className='absolute top-7 right-5'>
                    <BsCircle className='text-4xl text-[#BBDFC5]'/>
                    <BsCircle className='ml-4 -mt-3 text-2xl text-[#BBDFC5]' />
                </div>
                <div className='absolute bottom-10 right-8'>
                    <CgShapeHexagon className='text-5xl text-[#BAB700]' />
                </div>
                <div className='absolute top-12 left-7 text-3xl text-gradient-to-lr'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
                <div className='absolute bottom-7 left-12'>
                    <BsCircleFill className='text-[#FF579F]' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards