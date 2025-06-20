import React from 'react'
import './MovieInfo.css'


const MovieInfo = ({ movie }) => {
  if (movie) console.log(movie);
  
  return(
    <div className="mi-wrap">
      <div className="title-rate">
        <div className="title">
          <h1>{movie.title}</h1>
        </div>
        <div className="rate">
          <span className="release-date">
            <i className="fa-solid fa-calendar"> </i>
            <p>{movie.release_date}</p>
          </span>
          <span className="likes">
            <i className="fa fa-thumbs-up"></i>
            <p>{movie.vote_average}</p>
          </span>
        </div>
      </div>
      
      <div className="mv-img">
        <img 
	        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
	        alt={movie.title}
        />
      </div>
      
      <div className="mv-genres">
        <h4>Genres</h4>
        <div className="mv-genres-wrap">
	        {movie.genres.map((genre) => (
	          <div key={genre.id} className="genre-wrap">
		          <p>{genre.name}</p>
	          </div>
	        ))}
        </div>
      </div>
      
      <div className="mv-desc">
        <h4>Overview</h4>
        <p>{movie.overview}</p>
      </div>
      
      <div className="mv-prod">
        <h4>Producers</h4>
        <div className="prod-grid-boxes">
	        {movie.production_companies.map((comp) => (
	          <div key={comp.id} className="prod-wrap">
	            <div className="prod-box">
								<p>{comp.name}</p>
	            </div>
	          </div>
	        ))}
        </div>
        
        
      </div>
      
      <div className="mv-website">
        <button>
          <a href={movie.homepage}>Visit Movie website</a>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default MovieInfo
