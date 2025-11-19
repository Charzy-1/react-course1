import { Routes, Route } from "react-router";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrderPage } from "./pages/orders/OrderPage";
import "./App.css";
import { TrackingPage } from "./pages/TrackingPage";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage cart={cart} />} />
    </Routes>
  );
}

export default App;
