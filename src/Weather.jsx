import React, { useState, useEffect } from 'react';
import parseWeather from './util/parseWeather';


const Weather = () => {

  const [today, setToday] = useState(null);
  const [tonight, setTonight] = useState(null);

  useEffect(() => {
    let loc = "37.841664,-122.284948"
    parseWeather(loc).then(result => {
      setToday(result.today);
      setTonight(result.tonight);
    });
  }, [])

  return (
    <div className="weather-container">
      <h1>Today's weather:</h1>
      <h3>Today</h3>
        {today ? 
          (<div className="weather-section">
            <img src={today.icon}/>
            <p>{today.detailedForecast}</p>
          </div>)
          : 
          <p>loading...</p>}
      <h3>Tonight</h3>
        {tonight ? 
          (<div className="weather-section">
            <img src={tonight.icon}/>
            <p>{tonight.detailedForecast}</p>
          </div>)
          : <p>loading...</p>}
    </div>
  )
}

export default Weather