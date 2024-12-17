import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcrylicPhotoFrames from "./components/AcrylicPhotoFrames";
import ProductDetails from "./components/ProductDetails";
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Login from './pages/LoginPage'
import HomePage from './pages/HomePage'
import RegistrationPage from './pages/RegistrationPage'
import CartItems from './components/CartItems'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/acrylicPhotoFrames" element={<AcrylicPhotoFrames />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cartitems" element={<CartItems />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
