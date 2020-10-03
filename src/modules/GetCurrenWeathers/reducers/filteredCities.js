import { constants } from 'modules/GetCurrenWeathers'
import { sortBy } from 'lodash'

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
    case constants.FILTER_CITIES_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      }
    case constants.FILTER_CITIES_SUCCEED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isFinished: true,
        },
        data: {
          total: action.response.data.cnt,
          list: sortBy(action.response.data.list, (city) => city.name),
        },
        statusCode: action.response.status,
      }
    case constants.FILTER_CITIES_FAILED:
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
