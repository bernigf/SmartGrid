import React, { useState } from 'react';

import './App.css';
import LoginModal from './components/login'

function App() {

    const [userText, setUserText] = useState('');
    const [bearerText, setBearerText] = useState('');

    const [showTable, setShowTable] = useState(false);

    const handleUserChange = (event) => { setUserText(event.target.value); };
    const handleBearerChange = (event) => { setBearerText(event.target.value); };

    const handleShowTable = () => { setShowTable(true) };

    return (
        <div>
		{ /*
        API UserID: <input type="text" value={userText} onChange={handleUserChange} />
        API Auth Bearer: <input type="text" value={bearerText} onChange={handleBearerChange} />
        <button onClick={handleShowTable}>Show Table</button>
		*/ }

        {showTable && (
        <table border='1px'><tr>
        <td>User:   {userText}</td>
        <td>Bearer: {bearerText}</td>
        </tr></table>
        )}

        <br />
        <LoginModal />

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
