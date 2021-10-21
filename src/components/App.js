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

function App() {

  const [content, setContent] = useState("Default text")

  function handleTextChange(e) {
      setContent(e.target.value)
  }

  return (
    <div className="main">
      <h1>Markdown Preview App</h1>
      <Editor content={content} handleTextChange={handleTextChange}/>
      <Preview content={content} renderer={renderer}/>
    </div>
  );
}

export default App;
