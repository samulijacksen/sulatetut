import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Jobs from './components/Jobs';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Weather from './components/Weather';

function App() {
  const initjobs = []
  const [jobs, setJobs] =useState(initjobs)

  const [FilterText, setfilterText] = useState ('');
  const [showall, setshowall] = useState(true)

  const handleFilter = (filterText) => {
    setfilterText(filteringText);
    if(filteringText=== ''){
    console.log('tuli app.js:n filteriin: ' . filteringtext)
    
  }
  else{
    setshowAll(false)
    console.log('tuli app.js:n filtteriin:' + filteringText)
  }
  }
  const handleComplete = (job) =>{
    jobs.map((checkJob) => {
      if (checkJob === job.id){
        checkJob.onCompleted = !checkJob.completed
      }
      console.log(checkJob.id + " . " + job.id)
    });
  
  const jobsToShow = showAll
  ?jobs
  :jobs.filtering(jobs => jobtyotehtava.toUpperCase().includes(filterText.toUpperCase()))

  useEffect(() =>{
  fetch('https://gis.vantaa.fi/rest/tyopaikat/v1/kaikki')
  .then(response =>response.json())
  .then(json=>setJobs([...json]));
  }, []);
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route path="Weather">
      <Weather />
      </Route>
      <Route path="/">
      <Search onFilter = {handleFilter}/>
      <Jobs onCompleted={handleComplete} jobs={JobsToShow} />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
