import React from 'react'
import { Link } from 'react-router-dom'
import './SearchResultsCard.css'
import RatingCircle from '../RatingCircle/RatingCircle'

const SearchResultsCard = ({ movie }) => {
  const movieId = movie.id;
  const likes = Math.round((movie.vote_average / 10) * 100);
  
  
  return(
    <div className="mv-wrap">
      <Link to={`/movie/${movieId}`} className="mv-card-link">
        <div className="mv-card-wrapper">
          <div className="mv-card">
            <div className="img-votes">
              <div className="mv-img">
                <img 
                  className="mv-image"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div className="mv-votes">
                 <RatingCircle rating={likes} />
              </div>
            </div>
            <div className="mv-info">
              <h2 className="mv-title">
                {movie.title}
              </h2>
              <div className="mv-desc">
                <p>{movie.overview}</p>
              </div>
              <div className="other-info">
                <p className="mv-date">
                  <i className="fa-solid fa-calendar"> </i>
                  {movie.release_date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SearchResultsCard