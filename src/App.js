import "./App.css";
import Accordian from "./components/accordian";
import ImageSlider from "./components/Image-slider";
import LightDark from "./components/light-dark";
import LoadMore from "./components/Load-more";
import QrCodeGenrator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import Star from "./components/star-rating";

import TabTest from "./components/tab/tab-test";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      <TabTest />
    </div>
  );
}

export default App;
