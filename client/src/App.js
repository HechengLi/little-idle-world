import React, { useEffect, useState } from 'react'
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
import $request from './resource/plugins/request'
import Town from './views/Town'
import Character from './views/Character'
import World from './views/World'
import Inventory from './views/Inventory'
import Setting from './views/Setting'
import NotFound from './views/NotFound'

import { updateUserStatus } from './store/user/action'

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

const mapStateToProps = state => ({
  loggedIn: state.user.status
})

const ProtectedPageReduxed = connect(
  mapStateToProps
)(ProtectedPages)

const Main = ({ updateUserStatus }) => {
  const [status, setStatus] = useState(0)
  const history = useHistory()

  useEffect(() => {
    $request.get('/api/data')
      .then(res => {
        updateUserStatus(true)
        setStatus(res.status)
      })
      .catch(err => {
        updateUserStatus(false)
        history.push('/login')
        setStatus(err.response.status)
      })
  }, [updateUserStatus])
  if (status === 0) return <div>loading</div>

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

const mapDispatchToProps = dispatch => ({
  updateUserStatus: status => dispatch(updateUserStatus(status))
})

const MainReduxed =  connect(
  null,
  mapDispatchToProps
)(Main)

const App = () => {
  return (
    <Router>
        <MainReduxed />
    </Router>
  )
}

export default App
