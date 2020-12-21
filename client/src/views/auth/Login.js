import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const submit = event => {
    event.preventDefault()
    axios.post('/auth', { username, password })
      .then(res => {
        history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="username">Username</label>
      <input id="username"  value={username} onChange={event => setUsername(event.target.value)} />
      <br />
      <label htmlFor="password">password</label>
      <input id="password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
      <br />
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
