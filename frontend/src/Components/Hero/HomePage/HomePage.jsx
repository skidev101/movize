import React from 'react'
import SearchBox from '../../SearchBox/SearchBox'
import './HomePage.css'

const HomePage = () => {
  return (
    <>
    <div className="hero-wrap">
      <div className="text-box">
        <h1>Movie Word search <br /> simplified</h1>
        <p>
         Search for movies and word 
         occurrences automatically and 100%
         <span className="highlight">
           free
         </span>
        </p>
      </div>
      <SearchBox />
    </div>
    </>
  )
}

export default HomePage