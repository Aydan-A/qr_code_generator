import React , {useState}from "react";
import QRCode from "qrcode";
import "../src/qr.css"

export default function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setqrCode] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const generateQR = () => {
    QRCode.toDataURL(inputValue).then((url)=>{
        setqrCode(url)
    }).catch((err)=>{
        console.log(err)
    })

  };

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter text or URL"/>
      <button type="submit" onClick={generateQR}>Generate QR</button>
      {qrCode&& (
        <div>
            <h3>Your QR Code</h3>
            <img src={qrCode} alt="QRCode" />
        </div>
      )}
    </div>
  );
}
