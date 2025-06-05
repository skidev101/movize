import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'
import one from '../temp/one.jpg'
import RatingCircle from '../RatingCircle/RatingCircle'

const MovieCard = ({ movie }) => {
  const movieId = movie.id;
  const likes = (movie.vote_average / 10) * 100;
  
  return(
    <div className="movie-wrap">
      <Link to={`/movie/${movieId}`}>
      <div className="movie-card">
      <div className="movie-img">
        <img 
        className="movie-image"
        src={one}
        alt={movie.title}
        />
      </div>
      <div className="movie-info">
      	<div className="movie-likes">
      		<RatingCircle rating={likes} />
      	</div>
        <h2 className="movie-title">
          {movie.title}
        </h2>
        <div className="other-info">
          <p className="movie-date">
            <i className="fa-solid fa-calendar"> </i>
            {movie.release_date}
          </p>
          {/*<p className="movie-votes">
            <i className="fa fa-thumbs-up"></i>
            {Math.round(movie.vote_average).toFixed(1)}
          </p>*/}
        </div>
      </div>
     </div>
    </Link>
    </div>
  )
}


export default MovieCard