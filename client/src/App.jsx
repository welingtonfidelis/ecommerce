import Navbar from './components/Molecules/navbar/Navbar'
import { Routes, Route, Link } from "react-router-dom"

import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
