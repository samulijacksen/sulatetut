import React from 'react'
import { VictoryPolarAxis, VictoryChart, VictoryTheme, VictoryBar} from 'victory'


function Lampotila (){
const sampleDataPolar=[]
return(

<div>
  <VictoryChart polar
    domain={{ x: [0, 360] }}
    theme={VictoryTheme.material}
  >
    <VictoryPolarAxis tickCount={8}/>
    <VictoryBar
     data={sampleDataPolar}
      style={{ data: { fill: "#c43a31", stroke: "black", strokeWidth: 2 }}}
    />
  </VictoryChart>
  </div>
)
}
 
 export default Lampotila