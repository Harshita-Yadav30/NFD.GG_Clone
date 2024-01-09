import React from 'react'
import Header from '../components/Header'
import LandingMain from '../components/LandingMain'
import AboutContent from '../components/AboutContent'
import Aggregator from './Aggregator'
import Team from './Team'
import EndPage from './EndPage'

const Landing = () => {
  return (
    <>
        <Header />
        <LandingMain />
        <AboutContent />
        <Aggregator />
        <Team />
        <EndPage />
    </>
  )
}

export default Landing