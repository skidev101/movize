import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
  const movieId = movie.id;
  
  return(
    <div className="movie-wrap">
      <Link to={`/movie/${movieId}`}>
      <div className="movie-card">
      <div className="movie-img">
        <img 
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
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
            <i className="fa fa-thumbs-up"></i>
            {Math.round(movie.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
     </div>
    </Link>
    </div>
  )
}


export default MovieCard