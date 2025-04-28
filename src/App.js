import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/Image-slider";
import RandomColor from "./components/random-color";
import Star from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/*Accoridian component*/}
      <Accordian />
      {/*RandomColor component*/}
      <RandomColor />
      {/*star component*/}
      <Star noOfStars={5} />
      {/*ImageSlider component*/}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
    </div>
  );
}

export default App;
