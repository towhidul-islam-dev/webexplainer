import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import AboutCard from '../components/AboutCard'
import Illustration8 from "../assets/illustration8.svg";
import AboutTeam from '../components/AboutTeam';

const About = () => {
  return (
    <>
      <div>
        <Header Illustration={Illustration8} title="About us" description="Welcome to the my website"/>
        <AboutCard />
        <AboutTeam />
        <Footer />
      </div>
    </>
  )
}

export default About