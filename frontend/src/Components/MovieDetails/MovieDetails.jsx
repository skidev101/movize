import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetails.css'
import MovieInfo from './MovieInfo/MovieInfo'
import WordSearch from './WordSearch/WordSearch'

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
        const response = await fetch(`http://localhost:4000/movie/${movieId}`, {
          method: 'GET'
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
        };
    };
  
  
  return(
    <div className="md-wrap">
      {loading ? (<div className="loader"></div>)
        : error ? (<p className="error-text">{error}</p>)
        : (
        <div>
        <MovieInfo movie={ completeMovie } />
        <WordSearch movie={ completeMovie } />
        </div>
      )}
    </div>
  )
}


export default MovieDetails