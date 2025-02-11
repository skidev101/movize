import React from 'react'
import './MovieCard.css'

const MovieCard = (movie) => {
  return(
    <div className="movie-wrap">
      <div className="movie-card">
      <div className="movie-img">
        <img 
        className="movie-image"
        src={movie.src}
        alt="img"
        />
      </div>
      <div className="movie-info">
        <h2 className="movie-title">
          {movie.title}
        </h2>
        <div className="other-info">
          <p className="movie-date">
            <i className="fa fa-calender"> </i>
            {movie.release_date}
          </p>
          <p className="movie-votes">
            <i className="fa fa-like"></i>
            {movie.vote}
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}


export default MovieCard