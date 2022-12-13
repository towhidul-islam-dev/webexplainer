import React from 'react'
import Header from '../components/Header'
import Illustration9 from "../assets/illustration9.svg";
import Footer from '../components/Footer';
import PopUps from '../components/PopUps';
import SectionCards from '../components/AboutCardSection';

const Contact = () => {
  return (
    <>
      <div>
        <Header Illustration={Illustration9} title="contact us" description="for any query contact us..." />
        <SectionCards />
        <Footer />
      </div>
    </>
  )
}

export default Contact