import React from 'react'
import './HomePage.css'
import Hero from './Hero/Hero'
import PopularMovies from '../PopularMovies/PopularMovies'
import NowPlaying from '../NowPlaying/NowPlaying'
import Upcoming from '../Upcoming/Upcoming'
//import RatingCircle from '../RatingCircle/RatingCircle'
import SearchResultsCard from '../SearchResultsCard/SearchResultsCard'



const HomePage = () => {
	console.log('homepage mounted');
	console.log('hello world')
  return (
    <div className="hero-wrap">
      <Hero />
      <SearchResultsCard />
      <PopularMovies />
      <NowPlaying />
      <Upcoming />
    </div>
  )
}

export default HomePage