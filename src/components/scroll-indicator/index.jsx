import { useEffect, useState } from "react";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  async function fetchData(getUrl) {
    try {
    } catch (error) {
      console.log(error);
      setErrorMessage(error.errorMessage);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return <div></div>;
}

export default ScrollIndicator;
