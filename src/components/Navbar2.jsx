import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import light from "../assets/brightness.png";
import dark from "../assets/dark-mode.png";
import "../index.css";

const Navbar = () => {
    const [mode, setMode] = useState(true);

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


  return (
    <div className=" dark:bg-slate-950 bg-slate-200 ">
      <div className="navbar dark:rounded-none dark:bg-slate-950 dark:text-white rounded-b-md bg-slate-100 w-96 mx-4 md:w-full md:px-16">
        <div className="navbar-start ml-2 md:ml-0">
         
          <a
            href="/"
            className="dark:text-white ml-2 font-bold cursor-pointer text-black hover:scale-125 hover:transition-all hover:ease-in-out text-3xl md:ml-40"
          >
            JLX
          </a>
        </div>
    
        <div className="navbar-end md:mr-40">
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
                className="dark:bg-white rounded-full h-7 w-7 mr-4 cursor-pointer"
              />
            )}
          </div>
          
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Navbar;
