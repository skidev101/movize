import React, { useState } from 'react'
import SearchBox from '../../SearchBox/SearchBox'
import './HomePage.css'
import shield from '../../../Assets/shield.jpg'

const HomePage = () => {
  // const bgSrc = [
  //   shield,
  //   ironman,
  //   captain
  // ];
  // const [bgImg, setBgImg] = useState(bgSrc[0]);
  
  // useEffect(() => {
  //   let currentIndex = 0;
  //   const changeBgImg = () => {
  //     setBgImg(bgSrc[currentIndex]);
  //     currentIndex = (currentIndex + 1) % bgSrc.length;
  //   };
  //   console.log("Hello world");
    
  //   const timer = setInterval(changeBgImg, 10000)
    
  //   return () => clearInterval(timer);
  // }, [])
  
  // const bgStyle = bgImg ? {backgroundImage: `url(${bgImg})`} : {};
  
  return (
    <div className="hp-wrap">
      <div className="hp">
        <div className="text-box">
        <h1>Movie search <br /> simplified</h1>
        <p>
         Search for movies automatically and 100%
         <span className="highlight">
           free
         </span>
        </p>
      </div>
      <SearchBox />
      </div>
    </div>
  )
}

export default HomePage