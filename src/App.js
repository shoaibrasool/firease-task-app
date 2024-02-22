import React from "react";
import Auth from "./pages/auth/auth";
import { Route, Routes } from 'react-router-dom'; // Changed import statement
import About from './pages/about/about';
import Blog from './pages/blog/blog';
import Contact from './pages/contact/contact';
import DashboardLayout from "./Layouts/DashboardLayout";
import Home from "./pages/home/home";


const App = () => {
  const isAuth = localStorage.getItem("firebaseToken")
  const role = 'user'
  return (
    <Routes>
      {isAuth && <Route path='/' element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
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
