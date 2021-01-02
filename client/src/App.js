import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Nav from './components/Nav'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import checkLogin from './views/auth/checkLogin'
import Town from './views/Town'
import Character from './views/Character'
import World from './views/World'
import Inventory from './views/Inventory'
import Setting from './views/Setting'
import NotFound from './views/NotFound'

import { updateUserStatus } from './store/user/action'
import { requestUserData } from './store/data/action'

import './App.css'

const ProtectedPages = ({ loggedIn }) => {
  if (!loggedIn) return <Redirect to="/login" />
  return (
    <React.Fragment>
      <Nav />
      <Switch>
        <Route path="/" exact><Redirect to="/town" /></Route>
        <Route path="/town" component={Town} />
        <Route path="/character" component={Character} />
        <Route path="/world" component={World} />
        <Route path="/inventory" component={Inventory} />
        <Route path="/setting" component={Setting} />
        <Route path="*" component={NotFound} />
      </Switch>
    </React.Fragment>
  )
}

const ProtectedPageReduxed = connect(
  state => ({
    loggedIn: state.user.status
  })
)(ProtectedPages)

const Main = ({ status, updateUserStatus, requestUserData }) => {
  const history = useHistory()

  useEffect(() => {
    requestUserData()
  }, [requestUserData])

  useEffect(() => {
    switch(status) {
      case 1:
        updateUserStatus(false)
        history.push('/login')
        break
      case 2:
        updateUserStatus(true)
        break
      default: break
    }
  }, [status, updateUserStatus, history])

  if (status <= 0) return <div>loading</div>

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact><Redirect to="/town" /></Route>
        <Route path="/login" component={checkLogin(Login)} />
        <Route path="/register" component={checkLogin(Register)} />
        <Route path="*" component={ProtectedPageReduxed} />
      </Switch>
    </div>
  )
}

const MainReduxed =  connect(
  state => ({
    status: state.data.status
  }),
  dispatch => ({
    updateUserStatus: status => dispatch(updateUserStatus(status)),
    requestUserData: () => dispatch(requestUserData())
  })
)(Main)

const App = () => {
  return (
    <Router>
        <MainReduxed />
    </Router>
  )
}

export default App
