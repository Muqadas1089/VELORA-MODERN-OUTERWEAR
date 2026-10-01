
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../COMPONENTS/Navbar";
import { CartProvider } from "../COMPONENTS/CartContext";

import Login from "../COMPONENTS/Login";
import Register from "../COMPONENTS/Register";
import TrackOrder from "../COMPONENTS/TrackOrder";
import Footer from "../COMPONENTS/Footer";

import Home from "../PAGES/Home";
import Men from "../PAGES/Men";
import Women from "../PAGES/Women";
import Categories from "../PAGES/Categories";
import OurTeam from "../PAGES/OurTeam";

// Temporary pages
const Products = () => <div>Products</div>;
const Services = () => <div>Services</div>;
const Cart = () => <div>Cart</div>;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* MEN */}
          <Route path="/Men" element={<Men />} />

          {/* WOMEN */}
          <Route path="/women" element={<Women />} />

          {/* CATEGORIES */}
          <Route path="/categories" element={<Categories />} />

          {/* OUR TEAM */}
          <Route path="/our-team" element={<OurTeam />} />

          {/* PRODUCTS */}
          <Route path="/products" element={<Products />} />

          {/* SERVICES */}
          <Route path="/services" element={<Services />} />

          {/* TRACK ORDER */}
          <Route
            path="/track-order"
            element={<TrackOrder />}
          />

          {/* CART */}
          <Route path="/cart" element={<Cart />} />

          {/* LOGIN */}
          <Route path="/login" element={<Login />} />

          {/* REGISTER */}
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;

