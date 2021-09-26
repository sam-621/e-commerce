import { getUserDataFromLS, setUserDataInLS } from '@Helpers/user'
import { useCookieApp } from '@Libs/react-cookie/useCookieApp'
import { updateUserData, updateUserLogged } from '@Redux/ducks/user'
import fillStore from '@Redux/fillStore'
import { IAction } from '@Types/redux'
import { COOKIE_MAX_AGE } from 'config/consts'
import { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'

const AppWrapper: FC = ({ children }) => {
  const dispatch = useDispatch<Dispatch<IAction>>()
  const [cookies, setCookies] = useCookieApp()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      fillStore(dispatch)

      if (cookies.token) {
        const userDetails = getUserDataFromLS()
        dispatch(updateUserData(userDetails))
        dispatch(updateUserLogged(true))
        // refresh token
        setCookies('token', cookies.token, { maxAge: COOKIE_MAX_AGE })

        return
      }

      setUserDataInLS(null)
    }
  }, [dispatch])

  return <>{children}</>
}

export default AppWrapper
