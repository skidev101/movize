import React from 'react'
import './MovieDetails.css'
import MovieInfo from './MovieInfo/MovieInfo'
//import WordSearch from './WordSearch/WordSearch'

const MovieDetails = ({ movie }) => {
  return(
    <div className="md-wrap">
      <MovieInfo movie={ movie } />
    </div>
  )
}


