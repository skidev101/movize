import SearchBox from '../../SearchBox/SearchBox'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-wrap">
      <div className="hero">
        <div className="hero-box">
					<h1>Movie search <br/> simplified</h1>
				  <p>Search for movies automatically and 100% free</p>
        </div>
      <SearchBox />
      </div>
    </div>
  )
}

export default Hero