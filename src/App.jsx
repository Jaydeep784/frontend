import { useState } from "react";
import AddProduct from "./components/AddProduct";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users/signup" element={<Signup />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/categories" element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
