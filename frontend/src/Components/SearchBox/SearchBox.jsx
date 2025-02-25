import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBox.css'


const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && searchQuery !== ''){
      e.target.blur();
      navigate(`/search?q=${searchQuery}`);
    }
  }
  
  const handleBtnClick = () => {
    if (searchQuery !== '') {
      navigate(`/search?q=${searchQuery}`);
    }
  }
  
  
  return (
    <>
      <div className="searchbar-wrap">
      <div className="search-wrap" tabIndex="0">
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
          <button onClick={handleBtnClick}>
            <span>
              <i className="fa fa-arrow-right"></i>
            </span>
          </button>
        </div>
        
      </div>
    </div>
    
    </>
  )
}

export default SearchBox