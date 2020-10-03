import { constants } from 'modules/GetCurrenWeathers'
import { sortBy } from 'lodash'
import cities from 'helpers/cities'

const getCityByName = (cityName) => {
  const selectedCity = cities.find((city) => city
    .name_en === cityName.replace(/'/g, ''))
  return selectedCity.name_ka
}

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
    isFinished: false,
  },
  data: [],
}

const currentWeather = (state = initialState, action) => {
  switch (action.type) {
    case constants.CURRENT_WEATHER_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      }
    case constants.CURRENT_WEATHER_SUCCEED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isFinished: true,
        },
        data: {
          total: action.response.data.cnt,
          list: sortBy(action.response.data.list, (city) => city.name)
            .map((city) => ({
              ...city,
              name_ka: getCityByName(city.name),
            })),
        },
        statusCode: action.response.status,
      }
    case constants.CURRENT_WEATHER_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isFinished: true,
        },
        errorMessage: action.error,
      }
    default:
      return state
  }
}

export default currentWeather
