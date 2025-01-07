import React, { useEffect, useState } from "react";
import Input from "./Components/Input";
import Button from "./Components/Button";
import {
  inputStyle,
  qrStyles,
  rowContainerStyle,
  rowStyle,
  boxStyles,
  innerBoxStyles,
  appStyle,
} from "./style/styles";

const App = () => {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("REACT");
  const [size, setSize] = useState(100);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrCode, setQrCode] = useState("");

  useEffect(() => {
    setQrCode(
      `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${word}`
    );
  }, [word, size, bgColor]);

  const handleTextChange = (e) => {
    if (e.target.value.trim() !== "") {
      setTemp(e.target.value);
    }
  };

  const handleGenerate = (e) => {
    // Prevent form submission behavior
    e.preventDefault(); 
    
    if (temp.trim() !== "") {
      setWord(temp);
    }
  };

  const handleBgColorChange = (e) => {
    setBgColor(e.target.value.substring(1));
  };

  const handleDimensionChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <div style={appStyle}>
      <h1>QR Code Generator</h1>

      <form onSubmit={handleGenerate}>
        <div>
          <Input
            type="text"
            placeholder="Enter Text to Encode"
            style={inputStyle}
            handleOnChange={handleTextChange}
          />
          <Button text="Generate" type="submit" />
        </div>

        <div style={rowContainerStyle}>
          <div style={rowStyle}>
            <h5>Background Color:</h5>
            <div style={boxStyles}>
              <div style={innerBoxStyles}>
                <Input
                  type="color"
                  style={{ border: "none", width: "50px", height: "50px" }}
                  defaultValue={"#ffffff"}
                  handleOnChange={handleBgColorChange}
                />
              </div>
            </div>
            <h5>{`#${bgColor}`}</h5>
          </div>

          <div style={rowStyle}>
            <h5>Dimensions</h5>
            <Input
              type="range"
              min={200}
              max={300}
              value={size}
              style={{
                width: "200px",
                accentColor: "#cf505f",
              }}
              handleOnChange={handleDimensionChange}
            />
            <h5>
              {size}px x {size}px
            </h5>
          </div>
        </div>
      </form>

      <div>
        <img
          style={{
            ...qrStyles,
            backgroundColor: `#${bgColor}`,
          }}
          src={qrCode}
          alt="QR Code"
        />
      </div>
      <a href={qrCode} download="QRCode">
        <Button text="Download" type="button" />
      </a>
    </div>
  );
};

export default App;
