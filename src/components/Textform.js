import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");

  const handleup = () => {
    setText(text.toUpperCase());
    props.showalert("Converted to uppercase", "success");
  };

  const handlelow = () => {
    setText(text.toLowerCase());
    props.showalert("Converted to lowercase", "success");
  };

  const cleartext = () => {
    setText("");
    props.showalert("Text cleared", "success");
  };

  const speak = () => {
    const msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  };

  const copytext = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Text copied", "success");
  };

  const handleCapital = () => {
    const arr = text.split(" ");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    setText(arr.join(" "));
    props.showalert("Text capitalized", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/\s+/).join(" ").trim());
    props.showalert("Extra spaces removed", "success");
  };

  const summarizeText = () => {
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
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

  const reverseText = () => {
    setText(text.split("").reverse().join(""));
    props.showalert("Text reversed", "success");
  };

  const countVowelsConsonants = () => {
    const vowels = text.match(/[aeiou]/gi)?.length || 0;
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
    props.showalert(`Vowels: ${vowels}, Consonants: ${consonants}`, "info");
  };

  const findReplace = () => {
    if (findText.trim() === "") {
      props.showalert("Enter a word to find", "warning");
      return;
    }

    const regex = new RegExp(findText, "g");
    const matchCount = (text.match(regex) || []).length;

    if (matchCount === 0) {
      props.showalert("Word not found in the text", "warning");
      return;
    }

    const replaced = text.replace(regex, replaceText);
    setText(replaced);
    props.showalert(`${matchCount} occurrence(s) replaced`, "success");
  };

  const removeNumbers = () => {
    setText(text.replace(/[0-9]/g, ""));
    props.showalert("Numbers removed", "success");
  };

  const toSentenceCase = () => {
    const lower = text.toLowerCase();
    const sentenceCase = lower.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) =>
      c.toUpperCase()
    );
    setText(sentenceCase);
    props.showalert("Converted to sentence case", "success");
  };

  const onchange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-3">{props.heading}</h2>

      <textarea
        className="form-control"
        value={text}
        onChange={onchange}
        rows="8"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#7077A1",
          color: props.mode === "light" ? "black" : "white",
        }}
      ></textarea>

      <hr />
      <h4 className="mt-4">Transform Text</h4>
      <div className="d-flex flex-wrap gap-2 my-2">
        <button className="btn btn-primary" disabled={!text} onClick={handleup}>Uppercase</button>
        <button className="btn btn-primary" disabled={!text} onClick={handlelow}>Lowercase</button>
        <button className="btn btn-primary" disabled={!text} onClick={handleCapital}>Capitalize</button>
        <button className="btn btn-primary" disabled={!text} onClick={toSentenceCase}>Sentence Case</button>
        <button className="btn btn-primary" disabled={!text} onClick={reverseText}>Reverse</button>
        <button className="btn btn-primary" disabled={!text} onClick={handleExtraSpaces}>Remove Spaces</button>
        <button className="btn btn-primary" disabled={!text} onClick={removeNumbers}>Remove Numbers</button>
      </div>

      <h4 className="mt-4">Utilities</h4>
      <div className="d-flex flex-wrap gap-2 my-2">
        <button className="btn btn-secondary" disabled={!text} onClick={copytext}>Copy</button>
        <button className="btn btn-secondary" disabled={!text} onClick={speak}>Speak</button>
        <button className="btn btn-secondary" disabled={!text} onClick={summarizeText}>Summarize</button>
        <button className="btn btn-secondary" disabled={!text} onClick={countVowelsConsonants}>Count V/C</button>
        <button className="btn btn-danger" disabled={!text} onClick={cleartext}>Clear</button>
      </div>

      <h4 className="mt-4">Find & Replace</h4>
      <div className="row g-2">
        <div className="col-md-5">
          <input
            type="text"
            placeholder="Find"
            value={findText}
            onChange={(e) => setFindText(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            placeholder="Replace with"
            value={replaceText}
            onChange={(e) => setReplaceText(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <button
            className="btn btn-warning w-100"
            disabled={!text || !findText}
            onClick={findReplace}
          >
            Replace
          </button>
        </div>
      </div>

      <hr />
      <h4 className="mt-4">Text Summary</h4>
      <p>{text.trim().split(/\s+/).filter(Boolean).length} words, {text.replace(/\s/g, "").length} characters</p>
      <p>Read Time: {0.008 * text.split(/\s+/).filter(Boolean).length} Minutes</p>

      <h4 className="mt-4">Preview</h4>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
  );
}
