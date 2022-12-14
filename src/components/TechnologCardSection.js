import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TechnologyCard from "./Technology_card"
import TechnologyCard2 from './TechnologyCard2';


import {FaLess,FaHtml5,FaDribbble,FaPython,FaCss3Alt,FaReact,FaVuejs,FaPhp,FaLaravel,FaNodeJs,FaSwift, FaSadCry, FaEarlybirds, FaGoogle, FaSketch, FaFigma, FaInvision, FaLinkedin, FaTachometerAlt, FaAndroid, FaAngular} from "react-icons/fa"
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
        " Technology="Favourite Technologies" IconTitle1="Html5" IconTitle2="JavaScript" IconTitle3="Css3Alt" IconTitle4="NodeJs" IconTitle5="Illustration" />

        <TechnologyCard2 Icon1={FaPhp} Icon2={FaLaravel} Icon3={FaPython} Icon4={DiRuby} Icon5={FaNodeJs} Illustration={Illustration4} Title="Backend Development" Description="Quickly communicate team driven imperatives without fully tested experiences. Authoritatively revolutionize high standards." Technology="Favourite Technologies" IconTitle1="php" IconTitle2="laravel" IconTitle3="python" IconTitle4="Ruby" IconTitle5="NodeJs" />

        <TechnologyCard Icon1={SiFlutter} Icon2={SiTypescript} Icon3={SiXcode} Icon4={FaTachometerAlt} Icon5={SiAbbvie} Illustration={Illustration3} Title="Software Quality Assurance" Description="Software quality assurance is a critical part of a successful software development process. Our experienced software quality assurance team runs manual and automation tests to ensures Quality and Competitiveness of the Product." Technology="Testing tools:" IconTitle1="Flutter" IconTitle2="Typescript" IconTitle3="Xcode" IconTitle4="TachometerAlt" IconTitle5="Abbvie"/>

        <TechnologyCard2 Icon1={FaEarlybirds} Icon2={FaLess} Icon3={FaSwift} Icon4={FaSadCry} Icon5={FaGoogle} Illustration={Illustration5} Title="IOS Development" Description="Quickly redefine multimedia based strategic theme areas through frictionless process improvements. Completely expedite." Technology="Favourite Technologies" IconTitle1="Earlybirds" IconTitle2="Less" IconTitle3="Swift" IconTitle5="Google" IconTitle4="SadCry" />

        <TechnologyCard Icon1={DiJava} Icon2={SiFlutter} Icon3={FaAndroid} Icon4={FaVuejs} Icon5={FaAngular} Illustration={Illustration7} Title="Android Development" Description="Monotonectally fabricate client-centric potentialities without collaborative portals. Continually develop optimal synergy rather than." Technology="Favourite Technologies
        " IconTitle1="Java" IconTitle2="Flutter" IconTitle3="Android" IconTitle5="Anguler" IconTitle4="VueJs" />
        
        <TechnologyCard2 Icon1={FaSketch} Icon2={FaFigma} Icon3={FaInvision} Icon4={FaDribbble} Icon5={FaLinkedin} Illustration={Illustration6} Title="UI/UX Design" Description="The user interface (UI) & user experience (UX) is a critical parts of any software product. As passionate designers, we are bringing any solutions to the next level with seamless user experiences and aesthetic interfaces." Technology="Modern UI & UX Design Tools:" IconTitle1="Sketch" IconTitle2="Figma" IconTitle3="Invision" IconTitle4="Dribbble" IconTitle5="LinkedIn" />
        <Footer /> 
      </div>
    </>
  )
}

export default TechnologCardSection