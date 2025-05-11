import "./style.css";
import { useEffect, useState } from "react";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setData(data.products);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  function handleScrollPercentage() {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(scrolled);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : !loading && <p>No data found</p>}
      </div>
    </div>
  );
}

export default ScrollIndicator;
