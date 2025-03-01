import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchBox.css'


const SearchBox = () => {
  const navigate = useNavigate();
  
  const redirect = () => {
    navigate(`/search`);
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
        placeholder="Search a movie"
        readOnly
        onClick={redirect}
        />
        
      </div>
    </div>
    
    </>
  )
}

export default SearchBox