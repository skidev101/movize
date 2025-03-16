import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetails.css'
import MovieInfo from './MovieInfo/MovieInfo'
// import WordSearch from './WordSearch/WordSearch'
import shield from '../../Assets/shield.jpg'

const MovieDetails = () => {
  const { movieId } = useParams();
  
  const [completeMovie, setCompleteMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if (movieId) {
      fetchMovieDetails();
    }
  }, [movieId]);
  
  const fetchMovieDetails = async () => {
      setError(null);
      setLoading(true);
      try{
        const response = await fetch(`https://movize-backend.vercel.app/movie`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ movieId })
        });
        const data = await response.json();
        if (!data) {
          setError('Movie not found');
        } else {
          setCompleteMovie(data);
          console.log(data);
        }
        
        } catch (err) {
          console.error(err);
          setError('An Unknown error occured');
          
        } finally {
          setLoading(false);
          console.log(completeMovie);
        };
    };
  
    const bgUrl = completeMovie?.poster_path ? `https://image.tmdb.org/t/p/w500${completeMovie.poster_path}` : shield;
    const bgStyle = {backgroundImage: `url(${bgUrl})`};
  
  return(
    <div className="md-wrap">
      {loading ? (<div className="loader"></div>)
        : error ? (<p className="error-text">{error}</p>)
        : completeMovie ? (
        <div className="md-holder">
          <MovieInfo movie={ completeMovie }/>
        </div>
      ) : null}
    </div>
  )
}


export default MovieDetails