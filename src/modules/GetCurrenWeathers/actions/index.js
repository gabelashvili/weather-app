import { constants } from 'modules/GetCurrenWeathers'

export const currentWeather = ({
  request: (userId) => ({
    type: constants.CURRENT_WEATHER_REQUESTED,
    payload: {
      userId,
    },
  }),
  succeed: (response) => ({
    type: constants.CURRENT_WEATHER_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.CURRENT_WEATHER_FAILED,
    error,
  }),
})

export const filteredCities = ({
  request: (keyword) => ({
    type: constants.FILTER_CITIES_REQUESTED,
    payload: {
      keyword,
    },
  }),
  succeed: (response) => ({
    type: constants.FILTER_CITIES_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.FILTER_CITIES_FAILED,
    error,
  }),
})
