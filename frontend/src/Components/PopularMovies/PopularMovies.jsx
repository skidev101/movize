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
      const response = await fetch('http://localhost:4000/popular', {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (!data.results) {
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
    <>
      {loading ? (
        <div className="loader"></div>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <div className="mv-cards">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          <div>
            <h1>Hello world</h1>
          </div>
        </div>
      )}
    </>
  )
}


export default PopularMovies