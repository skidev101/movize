import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Intro from './Components/Intro/Intro'
import Search from './Components/Search/Search'


const App = () => {
  return (
    <div>
      <Intro />
     <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/movies/:id" component={MovieInfo} />
        </Switch>
     </BrowserRouter>
    </div>
  )
}

export default App