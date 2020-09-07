import Cookies from 'js-cookie'
import config from '@s/token_time'

export const TOKEN_KEY = 'token'
export const TOKEN_TIME = 'token_time'

export const setToken = (token) => {
  const inFifteenMinutes = new Date(new Date().getTime() + (config.token_time + config.curTime))
  sessionStorage.setItem('token', token)
  Cookies.set(TOKEN_KEY, token, { expires: inFifteenMinutes })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
    ? Cookies.get(TOKEN_KEY)
    : sessionStorage.getItem('token')// hack 方案
  if (token) {
    return token
  } else {
    return false
  }
}

export const removeToken = () => {
  sessionStorage.removeItem('token:')// hack 方案
  Cookies.remove(TOKEN_KEY)
}

export const setTokenTime = (time) => {
  const expireTime = new Date(new Date().getTime() + time)
  Cookies.set(TOKEN_TIME, time, expireTime)
}

export const getTokenTime = () => {
  return Cookies.get(TOKEN_TIME)
}
