import React, { useState } from 'react'
import './Searchbar.css'

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = async(e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:4000/search', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          searchQuery: searchQuery
        })
      });
      const data = await response.json();
      console.log(data);
      console.log(searchQuery);
      } catch (err) {
        console.error(err);
      }
    };
  
  
  return (
    <form onSubmit={handleSearch}>
      <div className="searchbar-wrap">
      <div className="search-wrap" tabindex="0">
        <div className="search-icon">
          <span>
            <i 
            className="fa fa-magnifying-glass"
            onClick={handleSearch}></i>
          </span>
        </div>
        <input 
        type="text"
        placeholder="Search a movie"
        required
        value={searchQuery}
        onChange={(e) => {setSearchQuery(e.target.value)}}/>
      </div>
    </div>
    </form>
  )
}

export default Searchbar