import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Nav from './components/Nav'
import Town from './views/Town'
import Character from './views/Character'
import World from './views/World'
import Inventory from './views/Inventory'
import Quest from './views/Quest'
import NotFound from './views/NotFound'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact><Redirect to="/town" /></Route>
          <Route path="/town" component={Town} />
          <Route path="/character" component={Character} />
          <Route path="/world" component={World} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/quest" component={Quest} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
