import React from 'react';
import Jobs from './Jobs';

function Job({ job }) { Jobs, onCompleted}) {
       
    const [checked] = useState(false);

    const handleCompleted = () => {
        onCompleted(job);
    }
  
  const getStyle = (complete) => ({
   textDecoration: complete ? 'line-through' : 'none'
  })
        return (
      <table key={job.id} style={getComputedStyle(job.completed)}>
          <tbody>
              <tr>
                  <td width="1%">
                  <input type ="checkbox" onChange={handleCompleted}></input>
                  </td>
                <td width="59%">
                    {job.tyotehtava}
                </td>
                <td width="20%">
                    {job.osoite}    
                </td>
                <td width="20%">
                <a href={job.linkki}> lisätietoa </a>
                </td>
              </tr>
          </tbody>
      </table>


  )}
export default Job;