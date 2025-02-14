import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Intro from './Components/Intro/Intro'
import Searchbar from './Components/Searchbar/Searchbar'


const App = () => {
  return (
    <div>
      <Intro />
     <BrowserRouter>
        <Searchbar />
     </BrowserRouter>
    </div>
  )
}

export default App