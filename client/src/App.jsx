import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Molecules/navbar/Navbar";
import Home from './pages/Home/Home';
import Orders from './pages/Orders/Orders';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { toast } from 'react-toastify';

function App() {
  toast.configure();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
