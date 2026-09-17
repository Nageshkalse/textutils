import { useState } from "react";
function TextForm(props) {
    const [text, setText] = useState('enter text hear');

function handleUpClick() {
    setText(text.toUpperCase());
  }
  function handleLoClick() {
  setText(text.toLowerCase());
}


  return (
    <>
      <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label
          htmlFor="myBox"
          className="form-label"
        >
          Example textarea
        </label>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button
  className="btn btn-primary mx-2"
  onClick={handleUpClick}
>
  Convert to Uppercase
</button>
      <button
  className="btn btn-primary mx-2"
  onClick={handleLoClick}
>
  Convert to Lowercase
</button>

      <button className="btn btn-danger mx-2">
        Clear Text
      </button>

      <button className="btn btn-success mx-2">
        Copy Text
      </button>

      <div className="container my-3">
  <h2>Text Summary</h2>

  <p>
    {text.split(" ").length} words and {text.length} characters
  </p>

  <p>
    {0.008 * text.split(" ").length} minutes to read
  </p>
</div>
<div className="container my-3">
  <h2>Preview</h2>
  <p>{text}</p>
</div>
      </div>
    </>
  );
}

export default TextForm;