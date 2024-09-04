import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import light from "../assets/brightness.png";
import dark from "../assets/dark-mode.png";
import "../index.css";

const Navbar = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();
  const [visible, setVisible] = useState("hidden");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user) setLoggedUser(user);
  }, []);

  useEffect(() => {
    document.querySelector("html").classList.remove(("light", "dark"));
    const theme = JSON.parse(localStorage.getItem("theme"));
    var thememode;
    if (mode === true) thememode = "light";
    else thememode = "dark";

    localStorage.setItem("theme", JSON.stringify(thememode));
    document.querySelector("html").classList.add(thememode);
  }, [mode]);

  const handleLogout = () => {
    localStorage.removeItem("users");
    navigate("/users/login");
  };

  return (
    <div className=" dark:bg-slate-950 bg-slate-200 ">
      <div className="navbar dark:rounded-none dark:bg-slate-950 dark:text-white rounded-b-md bg-slate-100 w-96 mx-4 md:w-full md:px-16">
        <div className="navbar-start ml-2 md:ml-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              
              className="btn btn-ghost md:-ml-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  if (visible === "hidden") setVisible("");
                  else setVisible("hidden");
                }}
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
              className={`menu ${visible} dark:bg-slate-950 dark:text-white bg-white text-black menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow`}
            >
              <li>
                <a className="hover:text-yellow-300">Categories</a>
              </li>
              <li>
                <a className="hover:text-yellow-300" href="/products">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-yellow-300" href="/add-product">
                  Add Product
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="dark:text-white ml-2 md:ml-7 font-bold cursor-pointer text-black hover:scale-125 hover:transition-all hover:ease-in-out text-3xl"
          >
            JLX
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu dark:bg-slate-950 dark:text-white menu-horizontal px-1 text-black">
            <li>
              <a className="hover:text-gray-600">Categories</a>
            </li>
            <li>
              <a href="/products" className="hover:text-gray-600">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-600" href="/add-product">
                Add Product
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end md:mr-8">
          <div>
            {mode ? (
              <img
                onClick={() => setMode(false)}
                src={light}
                alt="light"
                className="h-8 w-8 mr-3 cursor-pointer"
              />
            ) : (
              <img
                onClick={() => setMode(true)}
                src={dark}
                alt="dark"
                className="dark:bg-white mr-4 h-7 w-7 cursor-pointer"
              />
            )}
          </div>
          <div
            className={`dropdown dropdown-end md:dropdown-bottom display-none`}
          >
            {loggedUser ? (
              <button
                onClick={() => {
                  if (visible === "hidden") setVisible("");
                  else setVisible("hidden");
                }}
                tabIndex={0}
                role="button"
                className="h-8 w-8 rounded-badge bg-lime-400 border border-black shadow-md text-black font-bold text-2xl hover:shadow-md hover:scale-125 hover:transition-all hover:ease-in-out"
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
            {loggedUser ? (
              <ul
                tabIndex={0}
                className={`${visible} dropdown-content menu dark:bg-slate-950 dark:text-white bg-black text-white rounded-box z-10 w-24 p-2 shadow mt-1.5`}
              >
                <li>
                  <button className="hover:text-slate-200">Profile</button>
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
            ) : (
              ""
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
