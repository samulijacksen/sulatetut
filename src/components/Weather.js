import React from 'react'
import { VictoryChart, VictoryLine } from 'victory'

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
                    { experiment: "1.1.", actual: -10 },
                    { experiment: "2.1.", actual: -5 },
                    { experiment: "3.1.", actual: -0 },
                    { experiment: "4.1.", actual: -10 },
                    { experiment: "5.1.", actual: -5 },
                    { experiment: "6.1.", actual: -0 },
                ]}
                style={{
                    data:
                        { stroke: "green", strokeWidth: 2 }
                }}
                x="experiment"
                y="experiment" />
        </VictoryChart>
        </div>
    
         
    )

}
export default Weather;