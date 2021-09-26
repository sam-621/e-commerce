import Input from '../atoms/Input'
import PrimaryButton from '../atoms/Butons/PrimaryButton'
import { useField } from '@Hooks/useField'
import { useAuthForm } from '@Hooks/useAuthForm'

const RegisterForm = () => {
  const email = useField('email', 'Email', 'input-1')
  const password = useField('password', 'Password', 'input-2')
  const confirmPassword = useField('password', 'Confirm password', 'input-3')
  const { error, handleSubmit } = useAuthForm(email.value, password.value, confirmPassword.value)

  return (
    <form method="post" className="RegisterForm" onSubmit={handleSubmit}>
      <h2 className="RegisterForm-title">Register</h2>
      <Input {...email} errorMessage={error.emailError} />
      <Input {...password} errorMessage={error.passwordError} />
      <Input {...confirmPassword} errorMessage={error.confirmPasswordError} />
      <div className="RegisterForm-submit">
        <PrimaryButton type="submit" text="Create an account" />
      </div>
    </form>
  )
}

export default RegisterForm
