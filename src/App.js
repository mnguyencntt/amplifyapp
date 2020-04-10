import React from 'react';
import logo from './svg/logo.svg';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./AnzFarmer_logo1_green.png" alt="logo" />
        <hr/>
        <p>
          AnZ-Platform say hello-world
        </p>
        <hr/>
        <a href="https://master.d19z9355is6mml.amplifyapp.com">
          AnZ-Platform home page
        </a>
        <hr/>
        <a href="https://www.farmersmarket.com.sg/">
          www.farmersmarket.com.sg
        </a>
        <hr/>
        <a href="https://www.opentaste.sg/">
          www.opentaste.sg
        </a>
        <hr/>
        <img src="./AnzFarmer_logo_transparent.png" alt="logo" height="400" />
        {/* <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React</a> */}
      </header>
    </div>
  );
}

export default App;
