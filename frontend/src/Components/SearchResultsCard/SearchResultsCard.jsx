import React from 'react'
import { Link } from 'react-router-dom'
import './SearchResultsCard.css'
import one from '../temp/one.jpg'
import movie from '../temp/movie'
import RatingCircle from '../RatingCircle/RatingCircle'

const SearchResultsCard = () => {
  const movieId = movie[0].id;
  const likes = (movie[0].vote_average / 10) * 100;
  
  return(
    <div className="mv-wrap">
      <Link to={`/movie/${movieId}`}>
	      <div className="mv-card-wrapper">
	      	<div className="mv-card">
	      		<div className="img-votes">
		      		<div className="mv-img">
				        <img 
					        className="mv-image"
					        src={one}
					        alt={movie[0].title}
				        />
				      </div>
				      <div className="mv-votes">
				         <RatingCircle rating={likes} />
				      </div>
		      	</div>
			      <div className="mv-info">
			        <h2 className="mv-title">
			          {movie[0].title}
			        </h2>
			        <div className="mv-desc">
				        <p>{movie[0].overview}</p>
			        </div>
			        <div className="other-info">
			          <p className="mv-date">
			            <i className="fa-solid fa-calendar"> </i>
			            {movie[0].release_date}
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