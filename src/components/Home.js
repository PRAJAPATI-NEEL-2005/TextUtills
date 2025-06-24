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
        <strong>TextUtils</strong> is your one-stop tool for powerful text manipulation and analysis.
        Whether you're writing, editing, or studying — we’ve got you covered.
      </p>

      <div className="text-start mt-4">
        <h5>✨ Key Features:</h5>
        <ul>
          <li>🔠 Convert text to <strong>Uppercase, Lowercase, Capitalized</strong> and <strong>Sentence case</strong></li>
          <li>🔁 <strong>Reverse</strong> your text or remove <strong>extra spaces</strong></li>
          <li>🔍 <strong>Find & Replace</strong> words instantly</li>
          <li>📊 Count <strong>words, characters, vowels</strong> & <strong>consonants</strong></li>
          <li>🧠 Smart <strong>Text Summarization</strong></li>
          <li>🔈 Listen to your text with <strong>Text-to-Speech</strong></li>
          <li>🚫 Remove <strong>numbers</strong> from the text</li>
          <li>📋 <strong>Copy</strong> text to clipboard with one click</li>
        </ul>
      </div>

      <p className="mt-3">
        Ready to transform your text? Click below to begin analyzing and enhancing your content.
      </p>

      <button className="btn btn-primary mt-3" onClick={handleStartAnalyzing}>
        🚀 Let’s Analyze
      </button>
    </div>
  );
}
