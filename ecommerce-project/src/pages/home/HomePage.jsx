import axios from "axios";
import { Header } from "../../components/Header";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  // fetching data from the backend with fetch method
  /* fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
    */

  // Fetching the data in a cleaner way using axios an npm package
  /*
  axios.get("http://localhost:3000/api/products").then((response) => {
    console.log(response.data);
  });
  */
  // Saving the data inside the use state to let us use the data from backend
  const [products, setProducts] = useState([]);

  // Using useEffect hooke to enable us run the code once the component is created
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
