import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css';
import App from './App';
import GenGrid from './GenGrid'

const reactContentRoot = document.getElementById("root")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  reactContentRoot
);

//const sizeTxt = document.getElementById("gridSizeTxt")
//const incBtn = document.getElementById("gridSizeIncrementBtn")
//const genBtn = document.getElementById("gridGenBtn")

//let gridSize = parseInt(document.getElementById("gridSizeTxt").textContent)
//let gridSizeCount = gridSize

/*incBtn.addEventListener("click", () => {
  gridSizeCount++
  sizeTxt.innerText = gridSizeCount
})

genBtn.addEventListener("click", () => {
  ReactDOM.render(<GenGrid />, reactContentRoot)  
})*/

