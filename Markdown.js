import React, { useState, useEffect } from "react";
import "./Markdown.scss";
import marked from "marked";
import { RiArrowGoBackLine } from "react-icons/ri";

marked.setOptions({
  breaks: true,
  smartypants: true,
});

function Markdown() {
  const [inputText, setInputText] = useState(placeholder);
  const [editorBtn, setEditorBtn] = useState(false);
  const [previewBtn, setPreviewBtn] = useState(false);

  useEffect(() => {
    document.title = "Markdown Preview."
  })

  function setText(event) {
    setInputText(event.target.value);
  }

  function handleEditorClick() {
    editorBtn ? setEditorBtn(false) : setEditorBtn(true);
  }

  function handlePreviewClick() {
    previewBtn ? setPreviewBtn(false) : setPreviewBtn(true);
  }

  // instead have a expanded class, or a suffix like 'container-expanded'
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
      <a className="portfolio" href="https://www.sunkenworld.com/">
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

const placeholder = `# This is Markdown Preview.

## A little site made using React.
### It uses Marked.js.

It uses the markup language **Markdown** to... well, ~~markdown~~ _markup_ the text.

You can do all sorts of things, like:

\`\`\`
    write code between backticks.
\`\`\`

It's also good for
  - Making
  - Lists
    - Like
    - This

Hey. | Why not | Make a table?
------| ------- | ---------
Put whatever | you want | in here.
Or leave it empty. | ... |


While I have your attention, here's a bit of info on this little app inside of a block quote:

> Everything on this page was coded by hand. No copying and pasting in site.
>
> Inputted text gets updated live in the Preview section through the use of React and the library Marked.
>
> The layout of this app was designed using CSS grids for a clean look and responsive layout. If possible, try resizing the window to see how the headers snap from being written vertically and to the left of the content to being on top when the viewport gets narrow.
>
> The buttons used to expand and collapse the windows use React's state to set the classes of various elements, as well as change the grid layout.


By the way, here's a link to [my homepage](https://www.sunkenworld.com/).

And finally, here's an embedded image:

![Triforce](http://www.blog.sunkenworld.com/wp-content/uploads/triforce.png)
`;

export default Markdown;
