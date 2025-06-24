import React from "react";

export default function About(props) {
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
              <strong>Analyze and Manipulate Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils allows you to easily transform your text. You can:
              <ul>
                <li>Convert to <strong>uppercase</strong> or <strong>lowercase</strong></li>
                <li><strong>Capitalize</strong> each word</li>
                <li><strong>Remove extra spaces</strong></li>
                <li>Use <strong>Text-to-Speech</strong> to read aloud</li>
                <li><strong>Copy</strong> text to clipboard</li>
                <li><strong>Clear</strong> all text instantly</li>
              </ul>
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
              <strong>Advanced Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Apart from basic transformations, TextUtils now includes:
              <ul>
                <li><strong>Summarize</strong> long text into key sentences</li>
                <li><strong>Find and Replace</strong> words with alerts for not found terms</li>
                <li>Accurate <strong>word</strong> and <strong>character count</strong></li>
                <li><strong>Reading time</strong> estimator</li>
              </ul>
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
              <strong>Free, Fast & Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils is 100% free to use and works in all major browsers including Chrome, Firefox, Safari, and Edge. It is lightweight, responsive, and optimized for performance.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
