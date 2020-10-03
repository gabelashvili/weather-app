import {
  put, takeLatest, call, select,
} from 'redux-saga/effects'
import { getCurrentWeather } from 'helpers/gateway'
import { actions, constants, selectors } from 'modules/GetCurrenWeathers'

function* currentWeather(action) {
  const { userId } = action.payload
  try {
    const response = yield call(getCurrentWeather, userId)
    yield put(actions.currentWeather.succeed(response))
    yield put(actions.filteredCities.succeed(response))
  } catch (error) {
    yield put(actions.currentWeather.failed(error))
    yield put(actions.filteredCities.failed(error))
  }
}

function* filteredCities(action) {
  const { keyword } = action.payload
  const allCity = yield select(selectors.selectCities)
  const filteredCity = {
    ...allCity,
    data: {
      ...allCity.data,
      list: allCity.data.list.filter((city) => city
        .name.toLowerCase().includes(keyword.toLowerCase())
        || city.name_ka.toLowerCase().includes(keyword.toLowerCase())),
    },
  }
  try {
    yield put(actions.filteredCities.succeed(filteredCity))
  } catch (error) {
    yield put(actions.filteredCities.failed(error))
  }
}

export default function* () {
  yield takeLatest(constants.CURRENT_WEATHER_REQUESTED, currentWeather)
  yield takeLatest(constants.FILTER_CITIES_REQUESTED, filteredCities)
}
