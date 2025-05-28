import React from 'react'
import './Hero.css'
import HomePage from './HomePage/HomePage'
import PopularMovies from '../PopularMovies/PopularMovies'
import NowPlaying from '../NowPlaying/NowPlaying'


const Hero = () => {
  return (
    <div className="hero-wrap">
      <HomePage />
      <PopularMovies />
      <NowPlaying />
    </div>
  )
}

export default Hero