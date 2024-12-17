

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React,{useState} from 'react'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Address from "./components/Address";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import TopStampModel from "./components/TopStampModel";
import Stampmodel from "./components/Stampmodel";
import AcrylicPhotoFrames from "./components/AcrylicPhotoFrames";
import ProductDetails from "./components/ProductDetails";
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'

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
        <Route path="/acrylicPhotoFrames" element={<AcrylicPhotoFrames />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

