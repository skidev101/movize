import React from 'react'
import './Hero.css'
import HomePage from './HomePage/HomePage'
import PopularMovies from '../PopularMovies/PopularMovies'

const Hero = () => {
  return (
    <div className="hero-wrap">
      <HomePage />
      <PopularMovies />
    </div>
  )
}

export default Hero