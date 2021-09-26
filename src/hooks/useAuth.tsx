import { getCartProductsFromLS } from '@Helpers/cart'
import { useCookieApp } from '@Libs/react-cookie/useCookieApp'
import { showErrorToast } from '@Libs/react-toastify/toast'
import { updateUserData, updateUserLogged } from '@Redux/ducks/user'
import UserService from '@Services/UserServices'
import { IReduxState } from '@Types/redux'
import { IUser } from '@Types/user'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const useAuth = () => {
  const dispatch = useDispatch()
  const [token, setToken] = useCookieApp('token')
  const [user, setUser] = useState<IUser>(null)
  const isLogged = useSelector<IReduxState>((state) => state.user.isLogged)

  if (token && !isLogged) {
    dispatch(updateUserLogged(true))
    dispatch(updateUserData(user))
  }

  const login = async (token: string) => {
    const { data, errorMessage } = await new UserService().getUserData(token)

    if (errorMessage) {
      showErrorToast(errorMessage)
      return
    }

    setToken('token', token)
    dispatch(updateUserLogged(true))
    dispatch(updateUserData(data))

    const cartProducts = getCartProductsFromLS()
    // save products in backend
  }

  return {
    login,
  }
}
