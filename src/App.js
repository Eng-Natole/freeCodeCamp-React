import "./App.css";
import Accordian from "./components/accordian";
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
      <Star />
    </div>
  );
}

export default App;
