import React from 'react'
import './MovieInfo.css'
import one from '../../temp/one.jpg'
import movie from '../../temp/movie'

const MovieInfo = () => {
  if (movie) console.log(movie);
  
  return(
    <div className="mi-wrap">
      <div className="title-rate">
        <div className="title">
          <h1>{movie[0].title}</h1>
        </div>
        <div className="rate">
          <span className="release-date">
            <i className="fa-solid fa-calendar"> </i>
            <p>{movie[0].release_date}</p>
          </span>
          <span className="likes">
            <i className="fa fa-thumbs-up"></i>
            <p>{movie[0].vote_average}</p>
          </span>
        </div>
      </div>
      
      <div className="mv-img">
        <img 
        src={one}
        alt={movie[0].title}
        />
      </div>
      
      <div className="mv-genres">
        <h4>Genres</h4>
        <div className="mv-genres-wrap">
	        {movie[0].genres.map((genre) => (
	          <div className="genre-wrap">
		          <p key={genre.id}>{genre.name}</p>
	          </div>
	        ))}
        </div>
      </div>
      
      <div className="mv-desc">
        <h4>Overview</h4>
        <p>{movie[0].overview}</p>
      </div>
      
      <div className="mv-prod">
        <h4>Producers</h4>
        <div className="prod-grid-boxes">
	        {movie[0].production_companies.map((comp) => (
	          <div key={comp.id} className="prod-wrap">
	            <div className="prod-box">
	              {/*<img src={`https://image.tmdb.org/t/p/w500${comp.poster_path}`}
	              alt="img"
	              />*/}
	              <p>{comp.name}</p>
	            </div>
	          </div>
	        ))}
        </div>
        
        
      </div>
      
      <div className="mv-website">
        <button>
          <a href={movie[0].homepage}>Visit Movie website</a>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  )
}

export default MovieInfo
