import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Practitioner from "./Pages/Practitioner/Practitioner.jsx";
import Pricing from "./Pages/Pricing/Pricing.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import RegisterAsPractitioner from "./Pages/Auth/RegisterAsPractitioner/RegisterAsPractitioner.jsx";
import RegisterAsBuyer from "./Pages/Auth/RegisterAsBuyer/RegisterAsBuyer.jsx";
import Login from "./Pages/Auth/Login/Login.jsx";

import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'

import "./App.css"

const App = () => {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practitioner" element={<Practitioner />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register-as-practitioner" element={<RegisterAsPractitioner />} />
          <Route path="/register-as-buyer" element={<RegisterAsBuyer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;