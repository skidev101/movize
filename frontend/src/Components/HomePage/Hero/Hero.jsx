import SearchBox from '../../SearchBox/SearchBox'
import './Hero.css'

const Hero = () => {
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

export default Hero