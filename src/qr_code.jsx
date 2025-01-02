import React , {useState}from "react";
import QRCode from "qrcode";
import "../src/qr.css"

export default function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [qrCode, setqrCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage("");
  };

  const generateQR = () => {
    if (!inputValue.trim()) {
      setErrorMessage("Please enter a valid URL or text");
      return;
    }
    QRCode.toDataURL(inputValue).then((url)=>{
        setqrCode(url)
    }).catch((err)=>{
        console.log(err);
        setErrorMessage("err.message");
    })

  };

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter text or URL"/>
      <button type="submit" onClick={generateQR}>Generate QR</button>
      {errorMessage && <p className="error">{errorMessage}</p>}
      {qrCode&& (
        <div>
            <h3>Your QR Code</h3>
            <img src={qrCode} alt="QRCode" />
        </div>
      )}
    </div>
  );
}
