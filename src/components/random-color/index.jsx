import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256); // 0 to 255
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
  }

  useEffect(() => {
    if (typeofColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeofColor]);

  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeofColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <h2 style={{ color: "#fff" }}>{color}</h2> {/* Show the color code */}
    </div>
  );
}
