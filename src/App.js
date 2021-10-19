import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  return (
    <div className="App">
      <h1>Markdown Preview App</h1>
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
