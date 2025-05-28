import React from 'react'
import './Hero.css'
import HomePage from './HomePage/HomePage'
import PopularMovies from '../PopularMovies/PopularMovies'
//import NowPlaying from '../NowPlaying/NowPlaying'
import Upcoming from '../Upcoming/Upcoming'


const Hero = () => {
  return (
    <div className="hero-wrap">
      <HomePage />
      <PopularMovies />
      <NowPlaying />
      <Upcoming />
    </div>
  )
}

export default Hero