import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Practitioner from "./Pages/Practitioner/Practitioner.jsx";
import PractitionerDetail from './Pages/PractitionerDetail/PractitionerDetail.jsx';
import PractitionerStore from './Pages/PractitionerStore/PractitionerStore.jsx';
import PractitionerStoreProduct from './Pages/PractitionerStoreProduct/PractitionerStoreProduct.jsx';
import Pricing from "./Pages/Pricing/Pricing.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import RegisterAsPractitioner from "./Pages/Auth/RegisterAsPractitioner/RegisterAsPractitioner.jsx";
import RegisterAsBuyer from "./Pages/Auth/RegisterAsBuyer/RegisterAsBuyer.jsx";
import Login from "./Pages/Auth/Login/Login.jsx";


import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'

import Invoice from './Pages/Invoice/Invoice.jsx'
import ProfileSettings from './Pages/ProfileSettings/ProfileSettings.jsx'


import "./App.css"

const PageLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);


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

        <Routes>
          <Route path="/" element={<PageLayout><Home /></PageLayout>} />
          <Route path="/about" element={<PageLayout><About /></PageLayout>} />
          <Route path="/practitioner" element={<PageLayout><Practitioner /></PageLayout>} />
          <Route path="/practitioner/:id" element={<PageLayout><PractitionerDetail /></PageLayout>} />
          <Route path="/practitioner/:id/store" element={<PageLayout><PractitionerStore /></PageLayout>} />
          <Route path="/practitioner/:id/product/:id" element={<PageLayout><PractitionerStoreProduct /></PageLayout>} />
          <Route path="/pricing" element={<PageLayout><Pricing /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
          <Route path="/register-as-practitioner" element={<PageLayout><RegisterAsPractitioner /></PageLayout>} />
          <Route path="/register-as-buyer" element={<PageLayout><RegisterAsBuyer /></PageLayout>} />
          <Route path="/login" element={<PageLayout><Login /></PageLayout>} />
          <Route path={"/admin"} element={<Dashboard />}>
            <Route path="invoice" element={<Invoice />} />
            <Route path="profile" element={<ProfileSettings />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
};
export default App;