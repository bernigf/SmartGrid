import './App.css';

function App() {

  const default_grid_size = 20
  const default_smda = 28.9

  return (
    <div className="App">
          AMPERON Smart Grid
          <br></br>
          <br></br>
          Meters daily average:
          <div id="gridSMDATxt">{default_smda} kWh</div>
          <br></br>
          Grid Size:
          <div id="gridSizeTxt">{default_grid_size}</div>
          <br></br>
          <button id="gridSizeIncrementBtn">Grid Size +1</button>
          <br></br>
          <br></br>
          <button id="gridGenBtn">Generate random smart grid</button>
    </div>
  );
}

export default App;
