import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const togglemode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "#FFFCFB";
      document.body.style.color = "black";
     
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#424769";
      document.body.style.color = "#FFFCFB";
      
    }
  };
  return (
    <>
      <Navbar
        title="TextUtills"
        mode={mode}
        togglemode={togglemode}
        toggletext={`${mode} mode`}
      ></Navbar>
      <Alert alert={alert}></Alert>

      <Routes>
        <Route
          path="/home"
          element={
             <Home mode={mode}></Home>
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/analyze" element={<Textform
              heading="Enter your text to analyze:"
              mode={mode}
              showalert={showAlert}
            ></Textform>} />
        <Route
          path="/"
          element={
            <Home mode={mode}></Home>
          }
        />
      </Routes>
    </>
  );
}

export default App;
