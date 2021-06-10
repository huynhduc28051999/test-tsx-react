import axios from 'axios'
import queryString from 'query-string'
import { URL_BACKEND } from 'constants/appURL'

const axiosClient = axios.create({
  baseURL: URL_BACKEND,
  headers: {
    'content-type': 'application/json'
  },
  paramsSerializer: param => queryString.stringify(param)
})

axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('access-token')
  config.headers.Authorization = `Bearer ${token}` || ''
  return config
})

axiosClient.interceptors.response.use((response) => {
  return response
}, function(error) {
  if (error?.response?.status === 401) {
    localStorage.removeItem('access-token')
    document.location.href = '/login'
  } else if (error?.response?.status === 403) {
    document.location.href = '/home'
  }
  return Promise.reject(error?.message)
})

export default axiosClient