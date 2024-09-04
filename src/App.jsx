import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Products from "./components/Products";
import { useEffect } from "react";

function App() {
  var isLoggedin = false;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user !== null) isLoggedin = true;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/add-product" element={isLoggedin ? <AddProduct /> : <Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
