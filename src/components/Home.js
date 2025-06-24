import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();

  const handleStartAnalyzing = () => {
    navigate("/analyze");
  };

  const myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    backgroundColor: props.mode === "dark" ? "#2c2f4d" : "white",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
  };

  return (
    <div className="container my-5" style={myStyle}>
      <h1 className="mb-4">Welcome to TextUtils</h1>
      <p className="lead">
        TextUtils is a powerful utility that helps you manipulate and analyze your text efficiently.
        You can convert to uppercase/lowercase, remove extra spaces, count words and characters,
        and even listen to your text with text-to-speech!
      </p>
      <p>
        Whether you're a writer, student, or just need to format your text quickly, TextUtils is your go-to tool.
      </p>
      <button className="btn btn-primary mt-4" onClick={handleStartAnalyzing}>
        Let's Analyze
      </button>
    </div>
  );
}
