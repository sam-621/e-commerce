import { SyntheticEvent, useState } from 'react'
import { useCookieApp } from '@Libs/react-cookie/useCookieApp'
import UserService from '@Services/UserServices'
import { unstable_batchedUpdates } from 'react-dom'

const WRONG_EMAIL_FORMAT = 'Email format is incorrect'
const PASSWORDS_DOES_NOT_MATCH = 'Passwords does not match'
const PASSWORD_LENGTH = 'Password must have at least 6 characters'

export const useAuthForm = (
  email: string,
  password: string,
  confirmPassword?: string,
  isLogin = false
) => {
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [apiError, setApiError] = useState('')
  const [_, setCookie] = useCookieApp('token')

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

    const { data, errorMessage } = await new UserService().register({
      email,
      password,
    })

    if (errorMessage) {
      setApiError(errorMessage)
      return
    }

    setCookie('token', data)
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
