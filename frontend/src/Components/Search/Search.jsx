import React, { useState } from 'react'
import './Search.css'
import MovieCard from '../MovieCard/MovieCard'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, isLoading] = useState(false);
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      handleSearch(e);
      e.target.blur();
    }
  }
  const displayErr = (message) => {
    const errorText = document.querySelector('.error-text');
    errorText.textContent = message;
  }
  
  const handleSearch = async(e) => {
    e.preventDefault();
    isLoading(true);
    try{
      const response = await fetch('http://localhost:4000/search', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({searchQuery})
      });
      const data = await response.json();
      data.results = '' ? displayErr('Movie not found') : setMovies(data.results);
      console.log(movies);
      
      } catch (err) {
        console.error(err);
        displayErr('An Error occured');
      } finally {
        isLoading(false);
      }
    };
  
  
  return (
    <div>
      <div className="searchbar-wrap">
      <div className="search-wrap" tabindex="0">
        <div className="search-icon">
          <button>
            <i 
            className="fa fa-magnifying-glass"
            onClick={handleSearch}></i>
          </button>
        </div>
        <input 
        type="text"
        placeholder="Search a movie"
        required
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value)}}
        onKeyPress={handleKeyPress}
        />
      </div>
    </div>
    <p className="error-text"></p>
    
    {loading ? (
    <div className="loader"></div>
    ): (
    <div className="mv-cards">
     {
        movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))
     }
    </div>
    )}
    
    </div>
  )
}

export default Search