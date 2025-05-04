import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/Image-slider";
import LoadMore from "./components/Load-more";
import RandomColor from "./components/random-color";
import Star from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      <TreeView menus={menus} />
    </div>
  );
}

export default App;
