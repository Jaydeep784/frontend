import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user) setLoggedUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("users");
    navigate("/users/login");
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <a className="hover:text-yellow-300">Categories</a>
            </li>
            <li>
              <a className="hover:text-yellow-300">Products</a>
            </li>
            <li>
              <a className="hover:text-yellow-300" href="/add-product">
                Add Product
              </a>
            </li>
          </ul>
        </div>
        <a className="ml-4 md:ml-7 font-bold cursor-pointer text-yellow-400 hover:scale-125 hover:transition-all hover:ease-in-out text-3xl">
          JLX
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <a className="hover:text-yellow-300">Categories</a>
          </li>
          <li>
            <a className="hover:text-yellow-300">Products</a>
          </li>
          <li>
            <a className="hover:text-yellow-300" href="/add-product">
              Add Product
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end mr-2 md:dropdown-bottom ">
          {loggedUser ? (
            <button
              tabIndex={0}
              role="button"
              className="h-8 w-8 rounded-badge bg-yellow-400 text-gray-700 ml-6 font-bold text-2xl hover:shadow-md hover:shadow-yellow-700 hover:scale-110 hover:transition-all hover:ease-in-out mr-3 md:mr-8 "
            >
              {loggedUser[0]}
            </button>
          ) : (
            <Link
              to="/users/signup"
              className="btn btn-sm bg-yellow-400 hover:scale-105 hover:transition-all hover:ease-in mr-2 hover:bg-yellow-500 text-black"
            >
              Register
            </Link>
          )}
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow mt-1.5"
          >
            <li>
              <button className="hover:bg-yellow-400 hover:text-black">
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="hover:bg-red-700 hover:text-white"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
