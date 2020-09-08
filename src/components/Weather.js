import React from 'react'
import { VictoryChart, VictoryLine, VictoryHistogram } from 'victory'

function Weather() {

    return (
        <div aling="middle">
            <h3>P-PLOCC Lämpötila</h3>
        

        <VictoryChart
            domainPadding={{ x: 30, y: 10 }}
            width={1000}
            height={250}>
            <VictoryLine
                data={[
                    { experiment: "1.1.", actual: 10 },
                    { experiment: "2.1.", actual: 5 },
                    { experiment: "3.1.", actual: 0 },
                    { experiment: "4.1.", actual: -10 },
                    { experiment: "5.1.", actual: -5 },
                    { experiment: "6.1.", actual: -0 }
                ]}
                style={{
                    data:
                        { stroke: "green", strokeWidth: 2 }
                }}
                x="experiment"
                y="actual" />
        </VictoryChart>
        
        <VictoryChart>
  <VictoryHistogram
    style={{ 
        data:
         { fill: '#F1737F' }}}
    cornerRadius={3}
    data={[
      { x: 0 },
      { x: 1 },
      { x: 1 },
      { x: 1 },
      { x: 1 },
      { x: 2 },
      { x: 2 },
      { x: 3 },
      { x: 4 },
      { x: 7 },
      { x: 7 },
      { x: 10 }
    ]}
  />
</VictoryChart>


        </div>
       
    
         
    )

}
export default Weather;