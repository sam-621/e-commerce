import { SyntheticEvent, useState } from 'react'
import { useCookieApp } from '@Libs/react-cookie/useCookieApp'
import UserService from '@Services/UserServices'
import { unstable_batchedUpdates } from 'react-dom'
import { toast } from 'react-toastify'
import { showErrorToast, showSuccessToast } from '@Libs/react-toastify/toast'
import { useRouter } from 'next/router'

const WRONG_EMAIL_FORMAT = 'Email format is incorrect'
const PASSWORDS_DOES_NOT_MATCH = 'Passwords does not match'
const PASSWORD_LENGTH = 'Password must have at least 6 characters'

export const useAuthForm = (
  email: string,
  password: string,
  confirmPassword?: string,
  isLogin = false
) => {
  const router = useRouter()
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [apiError, setApiError] = useState('')
  const [_, setCookie] = useCookieApp('token')

  const service = isLogin ? new UserService().login : new UserService().register

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()

    if (!email) {
      setEmailError(WRONG_EMAIL_FORMAT)
      return
    }

    if (confirmPassword !== undefined && password !== confirmPassword) {
      unstable_batchedUpdates(() => {
        setConfirmPasswordError(PASSWORDS_DOES_NOT_MATCH)
        setPasswordError(PASSWORDS_DOES_NOT_MATCH)
      })
      return
    }

    if (password.length <= 5) {
      setPasswordError(PASSWORD_LENGTH)
      return
    }

    const dto = {
      email,
      password,
      username: 'username test',
    }

    const { data, errorMessage } = isLogin
      ? await new UserService().login(dto)
      : await new UserService().register(dto)

    if (errorMessage) {
      console.log(errorMessage)

      setApiError(errorMessage)
      showErrorToast(errorMessage)
      return
    }

    setCookie('token', data)
    router.push('/')
  }

  return {
    handleSubmit,
    error: {
      emailError,
      passwordError,
      confirmPasswordError,
      apiError,
    },
  }
}
