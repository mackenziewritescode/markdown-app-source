import React, { useState, useEffect } from "react";
import "./Markdown.scss";
import marked from "marked";
import { RiArrowGoBackLine } from "react-icons/ri";
import placeholder from "./placeholder";

marked.setOptions({
  breaks: true,
  smartypants: true,
});

function Markdown() {
  const [inputText, setInputText] = useState(placeholder);
  const [editorBtn, setEditorBtn] = useState(false);
  const [previewBtn, setPreviewBtn] = useState(false);

  useEffect(() => {
    document.title = "Markdown Preview.";
  });

  function setText(event) {
    setInputText(event.target.value);
  }

  function handleEditorClick() {
    editorBtn ? setEditorBtn(false) : setEditorBtn(true);
  }

  function handlePreviewClick() {
    previewBtn ? setPreviewBtn(false) : setPreviewBtn(true);
  }

  let classes = [];

  if (editorBtn === true || previewBtn === true) {
    classes = [
      "container-expanded",
      "editor-wrap-expanded",
      "preview-wrap-expanded",
    ];
  } else {
    classes = ["container", "editor-wrap", "preview-wrap"];
  }

  function hideStyle() {
    if (editorBtn === true || previewBtn === true) {
      return { display: "none" };
    } else {
      return null;
    }
  }

  return (
    <div>
      <a className="portfolio" href="https://www.sunkenworld.com/#page-3">
        <p className="portfolio-text">
          <RiArrowGoBackLine /> Back to portfolio
        </p>
      </a>
      <div id="container" className={classes[0]}>
        <div id="background" />

        <h2 className="header">Markdown Preview.</h2>
        <h3 className="editor-header" style={hideStyle()}>
          Text Editor
        </h3>
        <div
          id="editor-wrap"
          className={classes[1]}
          style={!previewBtn ? null : { display: "none" }}
        >
          <div className="button" id="editor-btn" onClick={handleEditorClick}>
            {!editorBtn ? "Expand" : "Collapse"}
          </div>
          <textarea id="editor" value={inputText} onChange={setText} />
        </div>
        <h3 className="preview-header" style={hideStyle()}>
          Text Preview
        </h3>

        <div
          id="preview-wrap"
          className={classes[2]}
          style={!editorBtn ? null : { display: "none" }}
        >
          <div className="button" id="preview-btn" onClick={handlePreviewClick}>
            {!previewBtn ? "Expand" : "Collapse"}
          </div>
          <div
            className="preview"
            dangerouslySetInnerHTML={{ __html: marked(inputText) }}
          />
        </div>
        <footer className="footer" style={hideStyle()}>
          <p>
            This site was made by{" "}
            <a className="footer-link" href="https://www.sunkenworld.com/">
              Mackenzie Charlton
            </a>{" "}
            in 2020 with{" "}
            <a className="footer-link" href="https://reactjs.org">
              React
            </a>{" "}
            and{" "}
            <a className="footer-link" href="https://marked.js.org">
              Marked
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Markdown;
