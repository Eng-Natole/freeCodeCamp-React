import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function Star({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
    console.log(`Rating: ${getCurrentIndex}`);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    console.log(`Hovering over star ${getCurrentIndex}`);
  }

  function handleMouseLeave() {
    setHover(rating);
    console.log("Mouse left star rating area");
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
            color={index <= (hover || rating) ? "yellow" : "white"}
          />
        );
      })}
    </div>
  );
}
