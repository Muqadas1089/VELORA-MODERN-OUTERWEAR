import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

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
import Checkout from "../PAGES/Checkout";

// Temporary pages
const Products = () => <div>Products</div>;
const Services = () => <div>Services</div>;
const Cart = () => <div>Cart</div>;

// Scroll to top on every page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />

        <Navbar />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* MEN */}
          <Route path="/Men" element={<Men />} />

          {/* WOMEN */}
          <Route path="/women" element={<Women />} />

          {/* CATEGORIES */}
          <Route
            path="/categories"
            element={<Categories />}
          />

          {/* OUR TEAM */}
          <Route
            path="/our-team"
            element={<OurTeam />}
          />

          {/* PRODUCTS */}
          <Route
            path="/products"
            element={<Products />}
          />

          {/* SERVICES */}
          <Route
            path="/services"
            element={<Services />}
          />

          {/* TRACK ORDER */}
          <Route
            path="/track-order"
            element={<TrackOrder />}
          />

          {/* CART */}
          <Route path="/cart" element={<Cart />} />

          {/* CHECKOUT */}
          <Route
            path="/checkout"
            element={<Checkout />}
          />

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