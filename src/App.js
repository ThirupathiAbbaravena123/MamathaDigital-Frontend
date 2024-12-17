

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AcrylicPhotoFrames from "./components/AcrylicPhotoFrames";
// import ProductDetails from "./components/ProductDetails";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<AcrylicPhotoFrames />} />
//         <Route path="/product-details/:id" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Address from "./components/Address";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import TopStampModel from "./components/TopStampModel";
import Stampmodel from "./components/Stampmodel";
import AcrylicPhotoFrames from "./components/AcrylicPhotoFrames";
 import ProductDetails from "./components/ProductDetails";

import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("My Profile"); // Default page is My Profile

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
      <div className="app-container">
        <Header />
        <div className="main-content">
          {/* Sidebar and Conditional Content */}
          <Sidebar setActivePage={setActivePage} />
          <div className="content">{renderContent()}</div>
        </div>

        {/* Routing Pages */}
        <Routes>
          <Route path="/Stamps" element={<TopStampModel />} />
          <Route path="/Stamp-model/:id" element={<Stampmodel />} />
          <Route path="/" element={<AcrylicPhotoFrames />} />
           <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

