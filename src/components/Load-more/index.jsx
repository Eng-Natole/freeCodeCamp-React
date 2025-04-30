import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false); // Correct state variable

  async function fetchproducts() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prev) => [...prev, ...result.products]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchproducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) {
      setDisable(true); // Correct logic
    }
  }, [products]);

  if (loading && products.length === 0) {
    return <div>loading data! please wait.</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products.map((item) => (
          <div className="product" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button
          className={disable ? "inactive" : ""}
          disabled={loading || disable}
          onClick={() => setCount((prev) => prev + 1)}
        >
          {loading ? "Loading..." : "Load more products"}
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
