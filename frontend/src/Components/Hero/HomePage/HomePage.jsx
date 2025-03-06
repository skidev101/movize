import React, { useState, useEffect } from 'react'
import SearchBox from '../../SearchBox/SearchBox'
import './HomePage.css'
import captain from '../../../Assets/cap.jpg'
import ironman from '../../../Assets/ironman.jpg'
import shield from '../../../Assets/shield.jpg'

const HomePage = () => {
  const bgSrc = [
    shield,
    ironman,
    captain
  ];
  const [bgImg, setBgImg] = useState(bgSrc[0]);
  
  useEffect(() => {
    let currentIndex = 0;
    const changeBgImg = () => {
      setBgImg(bgSrc[currentIndex]);
      currentIndex = (currentIndex + 1) % bgSrc.length;
    };
    
    const timer = setInterval(changeBgImg, 10000)
    
    return () => clearInterval(timer);
  }, [])
  
  const bgStyle = bgImg ? {backgroundImage: `url(${bgImg})`} : {};
  
  return (
    <>
    <div className="hp-wrap" style={bgStyle}>
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