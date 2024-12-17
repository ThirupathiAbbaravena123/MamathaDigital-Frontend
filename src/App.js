

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AcrylicPhotoFrames from "./components/AcrylicPhotoFrames";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<TopFrameModel />} /> */}
        <Route path="/" element={<AcrylicPhotoFrames />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
