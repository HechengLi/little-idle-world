import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, Route, Switch } from 'react-router-dom'

import Nav from '../../components/Nav'
import Town from '../Town'
import Character from '../Character'
import World from '../World'
import Inventory from '../Inventory'
import Setting from '../Setting'
import NotFound from '../NotFound'

const Auth = () => {
  const [status, setStatus] = useState(0)
  useEffect(() => {
    axios.get('/api/data')
      .then(res => {
        setStatus(res.status)
      })
      .catch(err => {
        setStatus(err.response.status)
      })
  }, [])
  if (status === 0) return <div>loading</div>
  else if (status === 403) return <Redirect to="/login" />

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

export default Auth
