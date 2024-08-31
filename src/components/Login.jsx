import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [login, setLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.email === "" || user.password === "") {
        return alert("Enter all the details");
    }

    if (user.password.length < 6) {
        return alert("Password length must be greater than 6");
    }

    try {
        const res = await axios.post("backend-six-inky-58.vercel.app/users/login", user);
        if (res.status === 201) {
            setUser(prev => ({ ...prev, name: res.data.user.name }));
        }
    } catch (e) {
        console.log(e);
    }
};

useEffect(() => {
    if (user.name) {
        localStorage.setItem("users", JSON.stringify(user.name));
        setLogin(true);
        navigate("/")
    }
}, [user.name]);


  // const handleSubmit = async (e) => {
  //   setLogin(false);
  //   e.preventDefault();
  //   if (user.email == "" || user.password == "")
  //     return alert("Enter all the details");
  //   if (user.password.length < 6)
  //     return alert("Password length must be greater than 6");

  //   try {
  //     const res = await axios.post("http://localhost:3001/users/login", user);
  //     console.log(res);

  //     if (res.status === 201) {
  //       const username = res.data.user.name;
  //       setUser((prev) => ({ ...prev, name: username }));
  //       console.log(user);
  //       const loggedUser = JSON.parse(localStorage.getItem("users"));
  //       if (!loggedUser) {
  //         localStorage.setItem("users", JSON.stringify(user.name));
  //       }
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   // axios
  //   //   .post("http://localhost:3001/users/login", user)
  //   //   .then((res) => {
  //   //     if (res.status === 201) {
  //   //       setLogin(true);
  //   //       console.log(login);
  //   //       setUser((prev) => ({ ...prev, name: res.data.user.name }));
  //   //     }
  //   //   })
  //   //   .catch((e) => console.log(e));

  //   // if (login) {
  //   //   const loggedUser = JSON.parse(localStorage.getItem("users"));
  //   //   if (!loggedUser) {
  //   //     localStorage.setItem("users", JSON.stringify(user.name));
  //   //   }
  //   // }
  // };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pt-16 md:justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-10 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Login to your account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
          Or
          <a
            href="/users/signup"
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            {" "}
            create a new account
          </a>
        </p>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  required
                  onChange={(e) =>
                    setUser((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  className="appearance-none bg-white block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={(e) =>
                    setUser((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                  className="bg-white appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Login
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
