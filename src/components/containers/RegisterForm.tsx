import { SyntheticEvent, useState } from 'react'
import Input from '../atoms/Input'
import PrimaryButton from '../atoms/Butons/PrimaryButton'
import UserService from '@Services/UserServices'
import { useCookieApp } from '@Libs/react-cookie/useCookieApp'
import { useField } from '@Hooks/useField'

const WRONG_EMAIL_FORMAT = 'Email format is incorrect'
const PASSWORDS_DOES_NOT_MATCH = 'Passwords does not match'
const PASSWORD_LENGTH = 'Password must have at least 6 characters'

const RegisterForm = () => {
  const email = useField('email', 'Email', 'input-1')
  const password = useField('password', 'Password', 'input-2')
  const confirmPassword = useField('password', 'Confirm password', 'input-3')
  const [error, setError] = useState('')
  const [_, setCookie] = useCookieApp('token')

  const handleRegister = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault()

    if (!email) {
      setError(WRONG_EMAIL_FORMAT)
      return
    }

    if (password !== confirmPassowrd) {
      setError(PASSWORDS_DOES_NOT_MATCH)
      return
    }

    if (password.length <= 5) {
      setError(PASSWORD_LENGTH)
      return
    }

    const { data, errorMessage } = await new UserService().register({
      email,
      password,
    })

    if (errorMessage) {
      setError(errorMessage)
      return
    }

    setCookie('token', data)
  }

  return (
    <form method="post" className="RegisterForm" onSubmit={handleRegister}>
      <h2 className="RegisterForm-title">Register</h2>
      <Input {...email} hasError={error === WRONG_EMAIL_FORMAT} errorMessage={WRONG_EMAIL_FORMAT} />
      <Input
        {...password}
        hasError={error === PASSWORDS_DOES_NOT_MATCH || error === PASSWORD_LENGTH}
        errorMessage={error}
      />
      <Input
        {...confirmPassword}
        hasError={error === PASSWORDS_DOES_NOT_MATCH || error === PASSWORD_LENGTH}
        errorMessage={error}
      />
      <div className="RegisterForm-submit">
        <PrimaryButton type="submit" text="Create an account" />
      </div>
    </form>
  )
}

export default RegisterForm
