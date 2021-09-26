import { useCookies } from 'react-cookie'

export const useCookieApp = (name?: string) => {
  return useCookies()
}
