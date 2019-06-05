const axios = require('axios');

const parseWeather = async loc => {
  let today;
  let tonight;

  await axios
    .get(`https://api.weather.gov/points/${loc}`)
    .then(result => {
      let forecast = result.data.properties.forecast
      return axios.get(forecast)
    })
    .then(result => {
      today = result.data.properties.periods[0]
      tonight = result.data.properties.periods[1]
    })

  return { today, tonight }

}

export default parseWeather