import React from "react";

export default function About(props) {
  // Determine styling based on mode
  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#2c2f4e" : "white",
    color: props.mode === "dark" ? "white" : "#042743",
    border: props.mode === "dark" ? "1px solid white" : "1px solid #ccc"
  };

  return (
    <div className="container my-4" style={{ color: myStyle.color }}>
      <h2 className="mb-3">About TextUtils</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analyze Your Text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils gives you the ability to transform and analyze your text easily — convert it to uppercase, lowercase, capitalize words, remove extra spaces, and even listen to it via speech synthesis.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong> Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is a free character and word counter tool that provides instant statistics and utilities for any text. Useful for writing tasks, word limits, and formatting.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This tool works in any modern web browser including Chrome, Firefox, Edge, and Safari. Responsive and lightweight for best user experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
