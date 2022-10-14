
import './App.css';
import Button from '@mui/material';
import SaveIcon from '@material-ui/icons';


function App() {
  return (
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
          <Button>
            startIcon={<saveIcon />}
            size="large"
            variant="contained"
            color="secondary"
            hello


          </Button>
        </a>
      </header>

    </div>

  );
}

export default App;


