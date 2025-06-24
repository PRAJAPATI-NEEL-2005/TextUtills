import React, { useState } from "react";

export default function Textform(props) {
  const handleup = () => {
    let upper = text.toUpperCase();
    setText(upper);
    props.showalert("converted to uppercase", "success");
  };
  const handlelow = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showalert("converted to lowercase", "success");
  };
  const cleartext = () => {
    setText("");
    props.showalert("text cleared", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const copytext = () => {
    navigator.clipboard.writeText(text);
    props.showalert("text copied", "success");
  };
  const handleCapital = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newtet = arr.join(" ");
    setText(newtet);
    props.showalert("text capitaizes", "success");
  };
  const handleExtraSpaces = () => {
    const newText = text.split(/\s+/).join(" ").trim();
    setText(newText);
    props.showalert("extra space removed", "success");
  };
  const summarizeText = () => {
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g); // split by sentences
    if (!sentences || sentences.length === 0) {
      props.showalert("Not enough text to summarize", "warning");
      return;
    }

    const summary =
      sentences.length > 2
        ? sentences.slice(0, Math.ceil(sentences.length / 3)).join(" ")
        : text;

    setText(summary);
    props.showalert("Text summarized", "success");
  };
  const onchange = (event) => {
    setText(event.target.value);
  };

  let [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <div className="mb-3">
            <h1>{props.heading} </h1>
            <textarea
              className="form-control"
              value={text}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#7077A1",
                color: props.mode === "light" ? "black" : "white",
              }}
              onChange={onchange}
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>
          </div>
          <button
            className="btn btn-primary"
            disabled={text.length === 0}
            onClick={handleup}
          >
            uppercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.length === 0}
            onClick={handlelow}
          >
            lowercase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.length === 0}
            onClick={copytext}
          >
            copy
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.length === 0}
            onClick={handleCapital}
          >
            capitalize
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.length === 0}
            onClick={speak}
          >
            speak
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.length === 0}
            onClick={handleExtraSpaces}
          >
            space remove
          </button>
          <button className="btn btn-primary mx-1 my-1" onClick={summarizeText}>
            Summarize
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            disabled={text.length === 0}
            onClick={cleartext}
          >
            clear
          </button>
        </div>

        <div className="container">
          <h2>your text summary</h2>
          <p>
            {text.trim().length === 0
              ? 0
              : text
                  .trim()
                  .split(/\s+/)
                  .filter((word) => word !== "").length}{" "}
            words, {text.replace(/\s/g, "").length} characters
          </p>

          <h2>Read time:</h2>
          <p>{0.008 * text.split(" ").length} Minutes</p>
          <h2>preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}
