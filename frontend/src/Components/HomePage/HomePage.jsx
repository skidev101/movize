import React from 'react'
import './HomePage.css'
import Hero from './Hero/Hero'
import PopularMovies from '../PopularMovies/PopularMovies'
import NowPlaying from '../NowPlaying/NowPlaying'
import Upcoming from '../Upcoming/Upcoming'
import Footer from '../Footer/Footer'


const HomePage = () => {
  return (
    <div className="hero-wrap">
      <Hero />
      <PopularMovies />
      <NowPlaying />
      <Upcoming />
      <Footer />
    </div>
  )
}

export default HomePage