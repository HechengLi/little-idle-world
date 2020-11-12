import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            Main
          </Route>
          <Route path="*">
            Not Found
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
