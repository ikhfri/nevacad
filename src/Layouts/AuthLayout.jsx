import { Link } from "react-router-dom";

const AuthLayout = (params) => {
    const {children, title, type} = params
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full p-8 bg-white rounded-lg shadow-lg sm:w-96">
        <h1 className="mb-6 text-3xl font-semibold text-center">{title}</h1>
        {children}
        <div className="flex items-center justify-center mt-4">
          <p className="text-sm text-center">
            {type === "login" ? "Belum punya akun?  " : "Sudah punya akun?  "}
          </p>
          {type == "login" && (
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          )}
          {type == "register" && (
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
