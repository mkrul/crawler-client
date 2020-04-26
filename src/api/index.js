import axios from 'axios'

const url = 'http://ec2-52-202-82-153.compute-1.amazonaws.com/api'
// const url = 'http://localhost:9001/api'

const api = axios.create({
  baseURL: url,
})

export const getListings = payload => api.get('/listings', payload)

const apis = {
  getListings
}

export default apis
