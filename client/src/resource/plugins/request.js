import axios from 'axios'
import { message } from 'antd'

const $request = {}

const errorHandler = err => {
  if (err.response.status !== 403) message.error(err.response.data)
  throw err
}

$request.get = function () {
  return axios.get(...arguments).catch(errorHandler)
}

$request.post = function () {
  return axios.post(...arguments).catch(errorHandler)
}

$request.put = function () {
  return axios.put(...arguments).catch(errorHandler)
}

$request.patch = function () {
  return axios.patch(...arguments).catch(errorHandler)
}

$request.delete = function () {
  return axios.delete(...arguments).catch(errorHandler)
}

export default $request
