import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, login } from "../../redux/Action/userAction";
// import { useAlert } from "react-alert";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 sm:px-10">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-4">Login</h2>
        {/* Your login form components */}
        <form>
          {/* Input fields for email and password */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              type="email"
              id="email"
              name="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              type="password"
              id="password"
              name="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={loginUser}
          >
            Login
          </button>
          <button
            type="submit"
            className="w-full mt-4 p-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            <NavLink to="/signup">Signup</NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
