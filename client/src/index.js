import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Provider } from "react-redux";
import store from "./redux/store";
import { images, items } from "./data/data";
import Video from "./utils/Video";
import PaySuss from "./utils/PaySuss";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { loadUser } from "./redux/Action/userAction";
import User from "./utils/profile/User";
import Address from "./utils/profile/Address";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    store.dispatch(loadUser());
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div className="">
          <Video />
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product images={images} items={items} />,
      },
      {
        path: "/paymentsuccess",
        element: <PaySuss />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/address",
        element: <Address />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
