import React from 'react'
import '../css/style.css'
import Header from './Header'
import HeroSection from './HeroSection'
import FeaturesSection from './FeaturesSection'

function Home() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <FeaturesSection/>
    </div>
  )
}

export default Home