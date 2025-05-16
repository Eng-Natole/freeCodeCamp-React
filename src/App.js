import "./App.css";
import Accordian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GitProfileFinder from "./components/github-profile/gitprofile";
import ImageSlider from "./components/Image-slider";
import LightDark from "./components/light-dark";
import LoadMore from "./components/Load-more";
import QrCodeGenrator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import Search from "./components/search-autocomplete/search";
import Star from "./components/star-rating";
import TabTest from "./components/tab/tab-test";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GitProfileFinder /> */}
      <Search />
    </div>
  );
}

export default App;
