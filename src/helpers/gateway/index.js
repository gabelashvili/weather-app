import axios from 'axios'
import cities from 'helpers/cities'

const appid = 'ba180738f4658f76be2dc3c06d2cd81e'
const citiesId = cities.map((city) => city.id).join(',')

export const getCurrentWeather = () => axios
  .get('http://api.openweathermap.org/data/2.5/group?', {
    params: {
      appid,
      id: citiesId,
      units: 'metric',
    },
  })

export const getDetailInfo = (cord) => axios
  .get('https://api.openweathermap.org/data/2.5/onecall', {
    params: {
      appid,
      lat: cord.lat,
      lon: cord.lon,
      exclude: 'minutely',
      units: 'metric',
    },
  })
