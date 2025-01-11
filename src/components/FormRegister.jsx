
const FormRegister = () => {
  return (
    <div>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Login
        </button>
      </form>
    
    </div>
  );
};

export default FormRegister;
