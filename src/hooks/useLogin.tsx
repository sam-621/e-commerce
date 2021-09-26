import { getCartProductsFromLS } from '@Helpers/cart'
import { setUserDataInLS } from '@Helpers/user'
import { useCookieApp } from '@Libs/react-cookie/useCookieApp'
import { showErrorToast } from '@Libs/react-toastify/toast'
import { updateUserData, updateUserLogged } from '@Redux/ducks/user'
import UserService from '@Services/UserServices'
import { IUser } from '@Types/user'
import router from 'next/router'
import { useDispatch } from 'react-redux'

export const useLogin = () => {
  const dispatch = useDispatch()
  const [_, setToken] = useCookieApp()

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
    /**
     * save products in backend
     */
    const userModified: IUser = {
      ...data,
      userCart: cartProducts,
    }
    setUserDataInLS(userModified)

    router.push('/')
  }

  const logOut = () => {
    setToken('token', null)
    dispatch(updateUserLogged(false))
    dispatch(updateUserData(null))
    setUserDataInLS(null)
  }

  return {
    login,
    logOut,
  }
}
