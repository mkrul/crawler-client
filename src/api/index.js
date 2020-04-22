import axios from 'axios'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:9001/api' : ''

const api = axios.create({
  baseURL: url,
})

export const insertEmail = payload => api.post('/email', payload)

const apis = {
  insertEmail
}

export default apis
