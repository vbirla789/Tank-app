import React, { useState, useEffect } from "react";
import { register } from "../../redux/Action/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  // console.log(name, email, password);

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [dispatch, isAuthenticated]);

  return (
    <div className=" flex items-center justify-center bg-gray-100 min-h-[110vh]">
      <div className="w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
        {/* Your sign-up form components */}
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border rounded-lg px-3 py-2 w-full"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={registerDataChange}
              required
            />
          </div>

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
              value={email}
              onChange={registerDataChange}
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
              value={password}
              onChange={registerDataChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={registerSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
