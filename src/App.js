import React from 'react';
import logo from './logo.svg';
import './App.css';

import EmailForm from './components/EmailForm'

function App() {

  const emailForm = <EmailForm/>

  return (

    <div className="App">
      {/* {navBar} */}
      <header className="App-header">
        {emailForm}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This will be the site.
        </p>
        <a
          className="App-link"
          href="https://strava.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jessica on Strava
        </a>
      </header>
    </div>
  );
}

export default App;
