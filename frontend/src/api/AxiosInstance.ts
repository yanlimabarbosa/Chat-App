import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
})

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('accessToken')
//     if (token && config.headers) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       // Handle token refresh logic here, if needed
//       console.log('Token expired. Handle token refresh logic here.')
//     }
//     return Promise.reject(error)
//   },
// )
