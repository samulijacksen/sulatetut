import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryGroup, VictoryBar, VictoryPortal, VictoryLabel } from 'victory'

function Weather() {

  function convertUTCDateToLocalDate(date) {
    new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
    return date;
  }
  const today = new Date();
  const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();
  const initWeather = [];
  const [weather, setWeather] = useState(initWeather);

  fetch('https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==&amount=50')
    .then(response => response.json())
    .then(json => setWeather([...json]));

  let humtempkey = 1;
  let chartTempData = [];
  let chartHumData = [];

  const rows = () => weather.slice(0, 24).reverse().map(temphum => {
    const fixedTime = String(convertUTCDateToLocalDate(new Date(temphum.PublishedAt)));
    const time = fixedTime.split(' ')[4].split(':')[0] + '.' + fixedTime.split(' ')[4].split(':')[1];
    const measurmentDate = temphum.PublishedAt.split('T')[0].split('-')[2] + '.' + temphum.PublishedAt.split('T')[0].split('-')[1] + '.' + temphum.PublishedAt.split('T')[0].split('-')[0];
    const measurmentTime = temphum.PublishedAt.split('T')[1].split(':')[0] + ('.') + temphum.PublishedAt.split('T')[1].split(':')[1];
    chartHumData.push({ x: String(time), y: parseInt(temphum.Hum), label: String(temphum.Hum) });
    chartTempData.push({ experiment: String(time), actual: parseInt(temphum.Temp) });
    return <div key={humtempkey++}> <b>Pvm</b>{measurmentDate} <b>Klo </b>{time}--------<b>Ilmankosteus</b>{temphum.Hum.split('.')[0]}%--------<b>Lämpötila</b>{temphum.Temp.split('.')[0]}°C </div>
  })

  const showTemperature = chartTempData;
  const showHumidity = chartHumData;
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
          data={showTemperature}
          style={{
            data:
              { stroke: "green", strokeWidth: 2 }
          }}
          x="experiment"
          y="actual" />
      </VictoryChart>

      <div aling="middle"></div>
      <h4>P-PLOCC Lämpötila</h4>
      <VictoryChart domainPadding={{ x: 60 }} height={350} width={1400}>
        <VictoryGroup>
          <VictoryBar
            style={{
              labels: { fontSize: 15, fill: "red" }
            }}
            labelComponent={<VictoryPortal><VictoryLabel /></VictoryPortal>}
            data={showHumidity}
          />
        </VictoryGroup>
      </VictoryChart>
    </div >
  )
}
export default Weather;

