import { useState } from "react";

export default function RandomColor() {
  const [typeofColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  return (
    <div className="container">
      <button>Create HEX Color</button>
      <button>Create RGB Color</button>
      <button>Generate Random color</button>
    </div>
  );
}
