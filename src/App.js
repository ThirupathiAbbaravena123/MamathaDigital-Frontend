

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{useState} from 'react'
import Header from "./components/Header";
import Address from "./components/Address";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import TopStampModel from "./components/TopStampModel";
import Stampmodel from "./components/Stampmodel";
import AcrylicPhotoFrames from "./components/AcrylicPhotoFrames";
import ProductDetails from "./components/ProductDetails";
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import RegistrationPage from './pages/RegistrationPage'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import CartItems from './components/CartItems'
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("My Profile"); 

  const renderContent = () => {
    switch (activePage) {
      case "My Profile":
        return <Profile />;
      case "My Address":
        return <Address />;
      case "My Orders":
        return <Orders />;
      default:
        return <Profile />;
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element = {<LoginPage />} />
        <Route path="/signup" element={<RegistrationPage /> } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cartitems" element={<CartItems />} />
        <Route path="/stampmodel" element={<TopStampModel />} />
        <Route path="/stampdetials/:id" element={<Stampmodel />} />
        <Route path="/acrylicPhotoFrames" element={<AcrylicPhotoFrames />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/HomePage" element={<HomePage />} />
  
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

