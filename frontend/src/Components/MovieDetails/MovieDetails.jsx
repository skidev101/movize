import React from 'react'
import MovieInfo from './MovieInfo/MovieInfo'
import WordSearch from './WordSearch/WordSearch'

const MovieDetails = ({ movie }) => {
  return(
    <div className="md-wrap">
      <MovieInfo />
      <WordSearch />
    </div>
  )
}

export default MovieDetails