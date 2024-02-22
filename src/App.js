import React from "react";
import Auth from "./pages/auth/auth";
import { Route, Routes } from 'react-router-dom'; // Changed import statement
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import DashboardLayout from "./Layouts/DashboardLayout";
import Home from "./pages/home/home";
import AddProduct from './pages/addProduct/addProduct';
import Users from './pages/users/users';
import AboutUs from "./pages/about/about";


const App = () => {
  const isAuth = localStorage.getItem("firebaseToken")
  const role = 'HR'
  return (
    <Routes>
      {isAuth && <Route path='/' element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addProduct" element={<AddProduct />} />
        {(role === 'HR' || role === 'admin') && <Route path="/contact" element={<Contact />} />}
        <Route path="*" element={<h1>Enter a valid route</h1>} />
      </Route>}
      <Route path="/login" element={<Auth onSignup={false} />} />
      <Route path="/signup" element={<Auth onSignup={true} />} />
      <Route path="*" element={<h1>Route doesn't exist</h1>} />

    </Routes>
  );
};

export default App;
