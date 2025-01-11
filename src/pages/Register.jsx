import AuthLayout from '../Layouts/AuthLayout'
import FormRegister from '../components/FormRegister'

const Register = () => {
  return (
    <AuthLayout title="Register" type="register">
        <FormRegister />
    </AuthLayout>
  )
}

export default Register