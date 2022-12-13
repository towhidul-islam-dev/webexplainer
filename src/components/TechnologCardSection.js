import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TechnologyCard from "./Technology_card"
import TechnologyCard2 from './TechnologyCard2';


import {FaUikit,FaSass,FaLess,FaHtml5,FcGoogle,FaApple,FaDribbble,FaPython,FaGithubSquare,FaCss3Alt,FaReact,FaVuejs,FaPhp,FaLaravel,FaNodeJs,FaSwift,FiFigma, FaSadCry, FaEarlybirds, FaGoogle, FaSketch, FaFigma, FaInvision, FaLinkedin, FaTachometerAlt, FaAndroid, FaAngular} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {SiTypescript,SiFlutter,SiXcode, SiAbbvie} from "react-icons/si"
import {DiRuby,DiJava} from "react-icons/di"

import Illustration1 from "../assets/illustration1.svg";
import Illustration2 from "../assets/illustration2.svg";
import Illustration3 from "../assets/illustration3.svg";
import Illustration4 from "../assets/illustration4.svg";
import Illustration5 from "../assets/illustration5.svg";
import Illustration6 from "../assets/illustration6.svg";
import Illustration7 from "../assets/illustration7.svg";

const TechnologCardSection = () => {
  return (
    <>
      <div className=''>
        <Header Illustration={Illustration2} title="Technology" description="Intrinsicly productivate ethical schemas rather than premium benefits." />
        <TechnologyCard Icon1={FaHtml5} Icon2={IoLogoJavascript} Icon3={FaCss3Alt} Icon4={FaReact} Icon5={FaNodeJs} Illustration={Illustration1} Title="Frontend Design & Development" Description="Proactively target sticky potentialities via user-centric opportunities. Quickly fabricate orthogonal mindshare via process-centric.
        " Technology="Favourite Technologies" />

        <TechnologyCard2 Icon1={FaPhp} Icon2={FaLaravel} Icon3={FaPython} Icon4={DiRuby} Icon5={FaNodeJs} Illustration={Illustration4} Title="Backend Development" Description="Quickly communicate team driven imperatives without fully tested experiences. Authoritatively revolutionize high standards." Technology="Favourite Technologies" />

        <TechnologyCard Icon1={SiFlutter} Icon2={SiTypescript} Icon3={SiXcode} Icon4={FaTachometerAlt} Icon5={SiAbbvie} Illustration={Illustration3} Title="Software Quality Assurance" Description="Software quality assurance is a critical part of a successful software development process. Our experienced software quality assurance team runs manual and automation tests to ensures Quality and Competitiveness of the Product." Technology="Testing tools:" />

        <TechnologyCard2 Icon1={FaEarlybirds} Icon2={FaLess} Icon3={FaSwift} Icon4={FaSadCry} Icon5={FaGoogle} Illustration={Illustration5} Title="IOS Development" Description="Quickly redefine multimedia based strategic theme areas through frictionless process improvements. Completely expedite." Technology="Favourite Technologies" />

        <TechnologyCard Icon1={DiJava} Icon2={SiFlutter} Icon3={FaAndroid} Icon4={FaVuejs} Icon5={FaAngular} Illustration={Illustration7} Title="Android Development" Description="Monotonectally fabricate client-centric potentialities without collaborative portals. Continually develop optimal synergy rather than." Technology="Favourite Technologies
        " />
        
        <TechnologyCard2 Icon1={FaSketch} Icon2={FaFigma} Icon3={FaInvision} Icon4={FaDribbble} Icon5={FaLinkedin} Illustration={Illustration6} Title="UI/UX Design" Description="The user interface (UI) & user experience (UX) is a critical parts of any software product. As passionate designers, we are bringing any solutions to the next level with seamless user experiences and aesthetic interfaces." Technology="Modern UI & UX Design Tools:" />
        <Footer /> 
      </div>
    </>
  )
}

export default TechnologCardSection