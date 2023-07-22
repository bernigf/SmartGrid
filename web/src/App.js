import './App.css';
import React, { useState } from 'react';

function App() {

    const [inputText, setInputText] = useState('');
    const [showTable, setShowTable] = useState(false);

    const handleInputChange = (event) => { setInputText(event.target.value); };
    const handleShowTable = () => { setShowTable(true) };

    return (
        <div>
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleShowTable}>Show Table</button>

        {showTable && (
            <table border='1px'>
            <tbody>
            <tr>
            <td>Input</td>
            <td>{inputText}</td>
            </tr>
            </tbody>
            </table>
        )}
        </div>
    );

    // const default_grid_size = 20
    // const default_smda = 28.9

    /*return (
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
    );*/

}

export default App;
