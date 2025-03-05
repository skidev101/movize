import React from 'react'
import './MovieInfo.css'

const MovieInfo = ({ movie }) => {
  
  return(
    <div className="mi-wrap" id="mi-wrap">
      <div className="title-rate">
        <div className="title">
          <h1>{movie.title}</h1>
        </div>
        <div className="rate">
          <p>{movie.release_date}</p>
          <p>{movie.vote_average}</p>
          <p>test</p>
        </div>
      </div>
      
      <div className="mv-img">
        <img 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="img"
        />
      </div>
      
      <div className="mv-desc">
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieInfo
