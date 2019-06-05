import React, { useState } from 'react';

const Weather = props => {

  const [weather, setWeather] = useState(null)

  return (
    <div className="weather-container">
      <h1>Today's weather:</h1>
      {weather ? weather : <p>loading...</p>}
    </div>
  )
}

export default Weather