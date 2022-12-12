import React from 'react'
import {FaUikit,FaSass,FaLess,FaHtml5,FcGoogle,FaApple,FaDribbble,FaGithubSquare,FaCss3Alt,FaReact,FaVuejs,FaPhp,FaLaravel,FaNodeJs,FaSwift,FiFigma} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {SiTypescript,SiFlutter,SiXcode} from "react-icons/si"
import {DiRuby,DiJava} from "react-icons/di"
import Illustration3 from "../assets/illustration3.svg";

const TechnologyCard = () => {
  return (
    <>
        <div className='flex items-center justify-center flex-col'>
            <div className='w-full max-w-7xl grid grid-cols-grid-card gap-20 place-items-center my-20'>
                <div>
                    <h2 className='text-left text-3xl capitalize mb-8 font-bold'>Favourite Technologies</h2>
                    <p className='text-left text-xl capitalize'>Proactively target sticky potentialities via user-centric opportunities. Quickly fabricate orthogonal mindshare via process-centric.</p>
                    <p className='text-left text-color-3 my-12' >Favourite Technologies</p>
                    <div className='grid grid-cols-technology-icon gap-4 mt-8'>
                        <FaUikit className='text-8xl font-bold'/>
                        <FaHtml5 className='text-8xl font-bold' />
                        <FaCss3Alt className='text-8xl font-bold' />
                        <FaReact className='text-8xl font-bold' />
                        <IoLogoJavascript className='text-8xl font-bold' />
                    </div>
                </div>
                <div className='w-96 border-2 border-gray-600'>
                    <img className='w-full block object-cover' src={Illustration3} alt="" />
                </div>
            </div>
            <div className='w-full max-w-7xl grid grid-cols-grid-card gap-20 place-items-center my-20'>
                <div className='w-96 border-2 border-gray-600'>
                    <img className='w-full block object-cover' src={Illustration3} alt="" />
                </div>
                <div>
                    <h2 className='text-left text-3xl capitalize mb-8 font-bold'>Favourite Technologies</h2>
                    <p className='text-left text-xl capitalize'>Proactively target sticky potentialities via user-centric opportunities. Quickly fabricate orthogonal mindshare via process-centric.</p>
                    <p className='text-left text-color-3 my-12' >Favourite Technologies</p>
                    <div className='grid grid-cols-technology-icon gap-4 mt-8'>
                        <FaUikit className='text-8xl font-bold'/>
                        <FaHtml5 className='text-8xl font-bold' />
                        <FaCss3Alt className='text-8xl font-bold' />
                        <FaReact className='text-8xl font-bold' />
                        <IoLogoJavascript className='text-8xl font-bold' />
                    </div>
                </div>
            </div>
            <div className='w-full max-w-7xl grid grid-cols-grid-card gap-20 place-items-center my-20'>
                <div>
                    <h2 className='text-left text-3xl capitalize mb-8 font-bold'>Favourite Technologies</h2>
                    <p className='text-left text-xl capitalize'>Proactively target sticky potentialities via user-centric opportunities. Quickly fabricate orthogonal mindshare via process-centric.</p>
                    <p className='text-left text-color-3 my-12' >Favourite Technologies</p>
                    <div className='grid grid-cols-technology-icon gap-4 mt-8'>
                        <FaUikit className='text-8xl font-bold'/>
                        <FaHtml5 className='text-8xl font-bold' />
                        <FaCss3Alt className='text-8xl font-bold' />
                        <FaReact className='text-8xl font-bold' />
                        <IoLogoJavascript className='text-8xl font-bold' />
                    </div>
                </div>
                <div className='w-96 border-2 border-gray-600'>
                    <img className='w-full block object-cover' src={Illustration3} alt="" />
                </div>
            </div>
            <div className='w-full max-w-7xl grid grid-cols-grid-card gap-20 place-items-center my-20'>
                <div className='w-96 border-2 border-gray-600'>
                    <img className='w-full block object-cover' src={Illustration3} alt="" />
                </div>
                <div>
                    <h2 className='text-left text-3xl capitalize mb-8 font-bold'>Favourite Technologies</h2>
                    <p className='text-left text-xl capitalize'>Proactively target sticky potentialities via user-centric opportunities. Quickly fabricate orthogonal mindshare via process-centric.</p>
                    <p className='text-left text-color-3 my-12' >Favourite Technologies</p>
                    <div className='grid grid-cols-technology-icon gap-4 mt-8'>
                        <FaUikit className='text-8xl font-bold'/>
                        <FaHtml5 className='text-8xl font-bold' />
                        <FaCss3Alt className='text-8xl font-bold' />
                        <FaReact className='text-8xl font-bold' />
                        <IoLogoJavascript className='text-8xl font-bold' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TechnologyCard