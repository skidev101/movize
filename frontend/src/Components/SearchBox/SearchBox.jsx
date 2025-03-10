import React from 'react'
import { Link } from 'react-router-dom'
import './SearchBox.css'


const SearchBox = () => {
  
  return (
    <>
      <div className="searchbar-wrap">
      <Link to={"/search"}>
      <div className="search-wrap">
        <div className="search-icon">
          <span>
            <i 
            className="fa fa-magnifying-glass"></i>
          </span>
        </div>
        <input
        placeholder="Search a movie"
        readOnly
        />
        
      </div>
      </Link>
    </div>
    
    </>
  )
}

export default SearchBox