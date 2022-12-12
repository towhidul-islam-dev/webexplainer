import React from 'react'
import Cards from '../components/Cards'
import Header from '../components/Header'
import Footer from "../components/Footer"
import Illustration1 from "../assets/illustration1.svg";

const Homepage = () => {
  return (
    <>
      <div>
        <Header Illustration={Illustration1} title="Welcome to my website" description="Best services grow the business value..." />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default Homepage