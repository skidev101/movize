import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage'
import SearchPage from './Components/SearchPage/SearchPage'
import MovieDetails from './Components/MovieDetails/MovieDetails'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/movie/:movieId" element={<MovieDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App