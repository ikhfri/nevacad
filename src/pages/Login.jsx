import AuthLayout from "../Layouts/AuthLayout";
import FormLogin from "../components/FormLogin";
const Register = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default Register;
