import React, { useState, useEffect } from 'react'
import './SearchPage.css'
import MovieCard from '../MovieCard/MovieCard'


const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [resultText, setResultText] = useState(null);
  const [placeholderText, setPlaceholderText] = useState("Search a movie...");
  
  const placeholderArray = [
      "Search Ironman",
      "Search Captain America",
      "Search Superman",
      "Search It",
      "Search Black Adam",
      "Search Thunderbolts"
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    const changePlaceholder = () => {
      setPlaceholderText(placeholderArray[currentIndex]);
      currentIndex = (currentIndex + 1) % placeholderArray.length;
    };
    const timer = setInterval(changePlaceholder, 3000);
    
    return () => clearInterval(timer)
  }, [])
  
  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== ''){
      e.target.blur();
      handleSearch(e);
      console.log("search in progress");
    }
  }
  
  
  const handleSearch = async (e) => {
      e.preventDefault();
      setError(null);
      setResultText(null);
      setLoading(true);
      try{
        const response = await fetch('https://movize-backend2.vercel.app/search', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({searchQuery})
        });
        const data = await response.json();
        if (!data.results || data.results.length === 0) {
          setError('Movie not found');
          setResultText(null);
        } else {
          setMovies(data.results);
          setResultText(`Results for ${searchQuery}`);
          console.log(movies);
        }
        } catch (err) {
          console.error(err);
          setError('An Unknown error occured');
          setResultText(null);
        } finally {
          setLoading(false);
        };
    };
  
  
  return (
    <>
      <form onSubmit={handleSearch}>
      <div className="searchbar-wrap">
      <div className="searchbar" tabIndex="0">
        <div className="searchbar-icon">
          <span>
            <i className="fa fa-magnifying-glass"></i>
          </span>
        </div>
        <input 
        type="text"
        placeholder={placeholderText}
        required
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value)}}
        onKeyPress={handleKeyPress}
        />
        <div className="searchbar-btn">
          <button type="submit">
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
    </form>
    
    <div className="mv-res-title">
        <h4>{resultText}</h4>
    </div>
    
    {loading ? (
    <div className="loader"></div>
    ): error ? (
    <p className="error-text">{error}</p>) : (
    <div className="mv-cards">
     {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
    )}
    </>
  )
}

export default SearchPage