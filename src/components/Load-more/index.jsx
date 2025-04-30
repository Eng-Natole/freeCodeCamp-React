import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchproducts() {
    setLoading(true); // ✅ start loading
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]); // ✅ append new products
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false); // ✅ stop loading (also moved outside try)
  }

  useEffect(() => {
    fetchproducts();
  }, [count]); // ✅ trigger when count changes

  if (loading && products.length === 0) {
    return <div>loading data! please wait.</div>;
  }

  return (
    <div className="container">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => setCount((prev) => prev + 1)} disabled={loading}>
          {loading ? "Loading..." : "load more products"}
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
