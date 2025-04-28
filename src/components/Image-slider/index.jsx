import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill } from "react-icons/bs";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    setLoading(true);
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url, page, limit]); // optional: add page and limit too if they might change

  console.log(images);

  if (loading) {
    return <div>Loading data! please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occurred! {errorMsg}</div>;
  }

  return <div className="container"></div>;
}
