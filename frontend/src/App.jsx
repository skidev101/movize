import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Intro from './Components/Intro/Intro'
import Search from './Components/Search/Search'


const App = () => {
  return (
    <div>
      <Intro />
     <BrowserRouter>
        <Search />
     </BrowserRouter>
    </div>
  )
}

export default App