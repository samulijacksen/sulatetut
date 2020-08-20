import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/search';

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


  const rows = () => jobs.map(job => {
    return <p><input type ="checkbox"></input>{job.tyotehtava}{job.osoite}, <a href={job.linkki}> lisätietoa </a></p>
  })
  return (
    <div className="App">
      <Header />
      <Search />
      {rows()}
    </div>
  );
}

export default App;
