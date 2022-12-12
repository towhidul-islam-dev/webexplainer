import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Illustration2 from "../assets/illustration2.svg";
import TechnologyCard from "./Technology_card"

const TechnologCardSection = () => {
  return (
    <>
      <div className=''>
        <Header Illustration={Illustration2} title="Technology" description="Intrinsicly productivate ethical schemas rather than premium benefits." />
        <TechnologyCard />
        <Footer /> 
      </div>
    </>
  )
}

export default TechnologCardSection