import "./style.css";
import useLocalStorage from "./useLocalStorage";

function LightDark() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello world!</p>
        <button onClick={handleToggle}>Change Theme</button>
      </div>
    </div>
  );
}
export default LightDark;
