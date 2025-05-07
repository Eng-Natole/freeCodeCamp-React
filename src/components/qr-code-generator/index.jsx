import QRCode from "react-qr-code";
import "./style.css";
import { useState } from "react";

function QrCodeGenrator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerate() {
    setQrCode(input);
    setInput("");
  }
  return (
    <div>
      <h1>Qr Code Generator</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />

        <button onClick={handleGenerate} disabled={!input.trim()}>
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}

export default QrCodeGenrator;
