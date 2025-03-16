import React,  { useState, useEffect } from 'react';
import './PopularMovies.css';
import MovieCard from '../MovieCard/MovieCard';

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    handleSearch()
  }, []);
  
  const displayErr = (message) => {
    setError(message);
  } 
  
  const handleSearch = async () => {
    setError(null)
    setLoading(true);
    try{
      const response = await fetch('https://movize-backend.vercel.app/api/popular', {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        displayErr('No Popular movies for now');
      } else {
        setMovies(data.results)
      }
      
      } catch (err) {
        console.error(err);
        displayErr('An Error occured');
      } finally {
        setLoading(false);
      }
    };

  return(
    <div className="pop-wrap">
      <div className="title">
        <h2>Trending 🔥</h2>
      </div>
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="mv-cards-wrap">
        <div className="mv-cards">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        </div>
      )}
    </div>
  )
}


export default PopularMovies
