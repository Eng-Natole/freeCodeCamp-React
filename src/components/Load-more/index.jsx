import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchproducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      setProducts((prev) => [...prev, ...result.products]); // ✅ Fix: Update state
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchproducts();
  }, [count]); // ✅ Fix: Add 'count' so it refetches when updated

  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
      <button onClick={() => setCount((prev) => prev + 1)} disabled={loading}>
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default LoadMore;
