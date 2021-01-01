import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const checkLogin = (WrappedComponent) => {
  const mapStateToProps = state => ({
    loggedIn: state.user.status
  })

  const Component = (props) => {
    const history = useHistory()

    useEffect(() => {
      if (props.loggedIn) history.push('/')
    }, [])

    return <WrappedComponent />
  }

  return connect(mapStateToProps)(Component)
}

export default checkLogin
