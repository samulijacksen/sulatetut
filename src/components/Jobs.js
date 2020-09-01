import React from 'react';
import Job from './Job';

function Jobs({ jobs, onCompleted }) {

  const handleCompleted = (job) => {
    onCompleted(job);
    
  }

  const rows = () => jobs.map(job => {
    return <Job onCompleted={handleCompleted} job={job} key={job.id} />
    //return <p><input type ="checkbox"></input>{job.tyotehtava}{job.osoite}, <a href={job.linkki}> lisätietoa </a></p>
  })

  return (
    <div>
      {rows()}
    </div>
  )


}
export default Jobs;