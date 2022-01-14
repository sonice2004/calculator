import './App.css';
import {React, useState} from 'react';
import Calculator from "./Calculator";
import History from "./History";
const App = () => {
  return (
    <div className="App row">
      <div class="col-xl-6">
        <Calculator/>
      </div>
      <div className="col-xl-6">
        <History/>
      </div>
    </div>
  );
}

export default App;
