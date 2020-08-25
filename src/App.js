import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/search';
import Jobs from './components/Jobs';
import {BrowserRouter as Router, Route, link, Switch} from 'react-router-dom';
import Weather from './Weather';

function App() {
  const initjobs = [
    {
      "id": 1,
      "tyotehtava": "lastenhoitaja"
    },
    {
      "id": 2,
      "tyotehtava": "lakaisukoneen kuljettaja"
    },
    {
      "id": 3,
      "tyotehtava": "alepankassa"
    }
  ]
  const [jobs, setJobs] =useState(initjobs)

  fetch('https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
  .then(response =>response.json())
  .then(json=>setJobs([...json]));

  return (
    <Router>
    <div className="App">
      <Header />
      <Route path="Weather">
      <Weather />
      </Route>
      <Route path="/">
      <Search />
      <Jobs jobs={jobs} />
      </Route>
    </div>
    </Router>
  );
}

export default App;
