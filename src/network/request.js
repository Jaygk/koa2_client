import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    // baseURL: 'http://123.207.32.32:8000/api/vip',
    baseURL: 'http://127.0.0.1:3000',
    timeout: 5000
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    throw err
  })
  //
  // instance.interceptors.request.use(config => {
  //   return config
  // }, err => {
  //   console.log(err)
  // })

  return instance(config)
}
