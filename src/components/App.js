import marked from 'marked';
import { useState } from 'react';
import './App.css';
import Editor from './Editor';
import Preview from './Preview';
import Prism from 'prismjs';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

export default function App() {

  const [content, setContent] = useState(defaultContent)

  function handleTextChange(e) {
      setContent(e.target.value)
  }

  return (
    <div className="main">
      <h1 className="title">Markdown Preview App</h1>
      <div className="container">
      <Editor content={content} handleTextChange={handleTextChange}/>
      <Preview content={content} renderer={renderer}/>        
      </div>
    </div>
  );
}


const defaultContent = `# Welcome to my Markdown Previewer!

## This freeCodeCamp project is created using React
### Things I learned in this project:

- I learned how to use the **marked library**:

\`\`\`
marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return "<a target="_blank" href="${'href'}">${'text'}</a>";
};
\`\`\`

- Reviewed how to apply \`{useState}\`
  
\`\`\`
const [content, setContent] = useState(defaultContent)
function handleTextChange(e) {
setContent(e.target.value)
}
\`\`\`


Visit my [website](https://www.foticeci.com), and view additional coding projects!


![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

> Always have the curiosity to learn.
`;