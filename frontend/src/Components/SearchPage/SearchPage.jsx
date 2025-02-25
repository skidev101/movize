import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './SearchPage.css'
import MovieCard from '../MovieCard/MovieCard'


const SearchPage = () => {
  const { q } = useParams();
  const [searchQuery, setSearchQuery] = useState(q);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter'){
      e.target.blur();
      handleSearch(e);
    }
  }
  
  const displayErr = (message) => {
    const errorText = document.querySelector('.error-text');
    errorText.textContent = message;
  }
  
  const handleSearch = async (e) => {
      e.preventDefault();
      setLoading(true);
      try{
        const response = await fetch('http://localhost:4000/search', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({searchQuery})
        });
        const data = await response.json();
        if (data.results === '') {
          displayErr('Movie not found')
        } else {
          setMovies(data.results);
          console.log(movies);
        }
        } catch (err) {
          console.error(err);
          displayErr('An Error occured');
        } finally {
          setLoading(false);
        };
    };
  
  
  return (
    <>
      <form onSubmit={handleSearch}>
      <div className="searchbar-wrap">
      <div className="search-wrap" tabindex="0">
        <div className="search-icon">
          <span>
            <i 
            className="fa fa-magnifying-glass"></i>
          </span>
        </div>
        <input 
        type="text"
        placeholder="Search a movie"
        required
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value)}}
        onKeyPress={handleKeyPress}
        />
        <div className="search-btn">
          <button type="submit">
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </button>
        </div>
        
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
     <div>
       <h1>Hello world</h1>
     </div>
    </div>
    )}
    </form>
    </>
  )
}

export default SearchPage