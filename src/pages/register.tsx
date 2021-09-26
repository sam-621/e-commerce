import RegisterForm from '@Components/containers/RegisterForm'
import TopMobileNav from '@Components/containers/Mobile/TopMobileNav'
import CustomToast from '@Components/atoms/CustomToast'

const Register = () => {
  return (
    <>
      <TopMobileNav />
      <RegisterForm />
      <CustomToast />
    </>
  )
}

export default Register
