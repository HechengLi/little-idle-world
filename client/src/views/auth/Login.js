import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Login = ({ className }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const submit = event => {
    event.preventDefault()
    axios.post('/uapi/auth', { username, password })
      .then(res => {
        history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form className={className} onSubmit={submit}>
      <label htmlFor="username">Username</label>
      <input id="username"  value={username} onChange={event => setUsername(event.target.value)} />
      <br />
      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={event => setPassword(event.target.value)} />
      <br />
      <button type="submit">Login</button>
      <button onClick={() => history.push('/register')}>Register</button>
    </form>
  )
}

const LoginStyled = styled(Login)`
`

export default LoginStyled
