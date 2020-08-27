import React, { useState } from 'react';
import Job from './Job';

function Jobs({ jobs }) {const handleCompleted = (job) => {
    onCompleted(job);
    console.log('käsittelen saamaani tietoa')
}

    const rows = () => jobs.map(job => {
        return <Job job={job} key={job.id}/>
        //return <p><input type ="checkbox"></input>{job.tyotehtava}{job.osoite}, <a href={job.linkki}> lisätietoa </a></p>
      })

  return (
    <div>
        {rows()}
    </div>
  )


}
export default Jobs;