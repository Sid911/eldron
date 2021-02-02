import logo from './logo.svg';
import './App.css';
import { Button } from "@material-ui/core";

function App() {
  return (
    // TODO: make stuff
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <Button variant="outlined" color="primary">Heelo theere! </Button>
      </header>
    </div>
  );
}

export default App;
