import React from 'react'
import Intro from './Components/Intro/Intro'
import Searchbar from './Components/Searchbar/Searchbar'
import MovieCard from './Components/MovieCard/MovieCard'

const App = () => {
  return (
    <div>
      <Intro />
      <Searchbar />
      <MovieCard />
    </div>
  )
}

export default App