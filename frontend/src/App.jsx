import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import SearchPage from './Components/SearchPage/SearchPage'
import MovieDetails from './Components/MovieDetails/MovieDetails'



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App