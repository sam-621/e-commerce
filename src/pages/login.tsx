import CustomToast from '@Components/atoms/CustomToast'
import LoginForm from '@Components/containers/LoginForm'
import TopMobileNav from '@Components/containers/Mobile/TopMobileNav'

const Login = () => {
  return (
    <>
      <TopMobileNav />
      <LoginForm />
      <CustomToast />
    </>
  )
}

export default Login
