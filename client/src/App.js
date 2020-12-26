import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Auth from './views/auth/Auth'
import Login from './views/auth/Login'

import './App.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact><Redirect to="/town" /></Route>
          <Route path="/login" component={Login} />
          <Route path="*" component={Auth} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
