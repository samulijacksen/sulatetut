import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryHistogram, VictoryGroup, VictoryBar, VictoryPortal, VictoryLabel } from 'victory'

function Weather() {

  const today = new Date();
  const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();

  const initWeather = [];
  const [weather, setWeather] = useState(initWeather);

  fetch('https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==&amount=50')
    .then(response => response.json())
    .then(json => setWeather([...json]));

    let humtempkey = 1;
    let chartTempData = [];
    let chartHumData =[];
  const rows = () => weather.slice(0, 24).reverse().map(temphum => {
    const measurmentDate = temphum.PublishedAt.split('T')[0].split('-')[2] + '.' + temphum.PublishedAt.split('T')[0].split('-')[1] + '.' + temphum.PublishedAt.split('T')[0].split('-')[0]
    const measurmentTime = temphum.PublishedAt.split('T')[1] + ('.') + temphum.PublishedAt.split(':')[0] + temphum.PublishedAt.split(':')[0] + temphum.PublishedAt.split(':')[1] + temphum.PublishedAt.split(':')[1]
   chartTempData.push({ x: String(measurmentTime),y: temphum.Temp});
   chartHumData.push({ experiment: String(measurmentTime), actual: parseInt(temphum.hum), label: String (temphum.hum)});   
    return <div key={humtempkey++}> <b>Pvm</b>{measurmentDate},<b>Klo</b>{measurmentTime},{temphum.PublishedAt}--------<b>Ilmankosteus</b>{temphum.Hum.split('.')[0]}%--------<b>Lämpötila</b>{temphum.Temp.split('.')[0]}°C </div>
  })
  
  const showTemperature = chartTempData;
  const Showhumidity = chartHumData;
  return (

    <div aling="middle">
      <div>
        <h3>P-PLOCC Lämpötila</h3>
      </div>
      <div>
        <b> tänään on: {date}</b>
      </div>
      <div>
        {rows()}
      </div>



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
              { fill: '#F1737F' }
          }}
          cornerRadius={3}
          data={[
            { x: 10 },
            { x: 10 },
            { x: 10 },
            { x: 10 },
            { x: 10 },
            { x: 1 },
            { x: 2 },
            { x: 3 },
            { x: 4 },
            { x: 7 },
            { x: 17 },
            { x: 12 }
          ]}
        />
      </VictoryChart>
      <div aling="middle"></div>

      <h4>P-PLOCC Lämpötila</h4>
      <VictoryChart domainPadding={{ x: 60 }}>
        <VictoryGroup offset={15}>
          <VictoryBar
            labels={["maanantai", "tiistai", "keskiviikko", "torstai", "perjantai"]}
            style={{
              labels: { fontSize: 15, fill: "red" }
            }}
            labelComponent={<VictoryPortal><VictoryLabel /></VictoryPortal>}
            data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 8 }]}
          />
          <VictoryBar
            data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
          />
          <VictoryBar
            data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
          />
          <VictoryBar
            data={[{ x: 4, y: 5 }, { x: 7, y: 7 }]}
          />
          <VictoryBar
            data={[{ x: 4, y: 8 }, { x: 7, y: 10 }]}
          />
        </VictoryGroup>
      </VictoryChart>

    </div >



  )

}
export default Weather;