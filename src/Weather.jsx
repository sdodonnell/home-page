import React, { useState, useEffect } from 'react';
import parseWeather from './util/parseWeather';


const Weather = () => {

  const [today, setToday] = useState(null);
  const [tonight, setTonight] = useState(null);

  useEffect(() => {
    let loc = "39.7456,-97.0892";
    parseWeather(loc).then(result => {
      setToday(result.today);
      setTonight(result.tonight);
    });
  }, [])

  return (
    <div className="weather-container">
      <h1>Today's weather:</h1>
      <h3>Today</h3>
        {today ? today.detailedForecast : <p>loading...</p>}
      <h3>Tonight</h3>
        {tonight ? tonight.detailedForecast : <p>loading...</p>}
    </div>
  )
}

export default Weather