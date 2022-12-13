import React from 'react'
import {FaUikit,FaSass,FaLess,FaHtml5,FcGoogle,FaApple,FaDribbble,FaGithubSquare,FaCss3Alt,FaReact,FaVuejs,FaPhp,FaLaravel,FaNodeJs,FaSwift,FiFigma} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {SiTypescript,SiFlutter,SiXcode} from "react-icons/si"
import {DiRuby,DiJava} from "react-icons/di"
import Illustration3 from "../assets/illustration3.svg";

const TechnologyCard = ({Icon1, Icon2, Icon3, Icon4, Icon5, Illustration, Title, Description, Technology}) => {
  return (
    <>
        <div className='flex items-center justify-center flex-col'>
            <div className='max-w-7xl w-11/12 grid grid-cols-grid-card gap-12 lg:gap-28 place-items-center my-20 p-6 sm:p-0'>
                <div>
                    <h2 className='text-left text-3xl capitalize mb-8 font-bold'>{Title}</h2>
                    <p className='text-left text-xl capitalize'>{Description}</p>
                    <p className='text-left text-color-3 my-12' >{Technology}</p>
                    <div className='grid grid-cols-technology-icon gap-4 mt-8'>
                        <Icon1 className='text-6xl lg:text-8xl font-bold'/>
                        <Icon2 className='text-6xl lg:text-8xl font-bold' />
                        <Icon3 className='text-6xl lg:text-8xl font-bold' />
                        <Icon4 className='text-6xl lg:text-8xl font-bold' />
                        <Icon5 className='text-6xl lg:text-8xl font-bold' />
                    </div>
                </div>
                <div className='max-w-2xl'>
                    <img loading='lazy' className='w-full block object-cover' src={Illustration} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default TechnologyCard