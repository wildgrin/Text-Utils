import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  
  const uppercaseHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertHandler("Converted to uppercase!", "success");
  };

  const lowercaseHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertHandler("Converted to lowercase!", "success");
  };

  const clearHandler = () => {
    let newText = "";
    setText(newText);
    props.alertHandler("Text Cleared!", "success");
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(text);
    props.alertHandler("Copied to Clipboard!", "success");
  };

  const extraSpacesHandler = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alertHandler("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div className="container my-3">
        <h1 className="myb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            id="myBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            placeholder="Enter text (copy and paste is fine) here:"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={uppercaseHandler}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={lowercaseHandler}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearHandler}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyHandler}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={extraSpacesHandler}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary:</h2>
        <p>
          {text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read</p>
        <h2>Preview:</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview here."}
        </p>
      </div>
    </>
  );
}
