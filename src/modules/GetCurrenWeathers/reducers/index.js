import { combineReducers } from 'redux'
import cities from 'modules/GetCurrenWeathers/reducers/cities'
import filteredCities from 'modules/GetCurrenWeathers/reducers/filteredCities'

const allReducer = combineReducers({
  cities,
  filteredCities,
})

export default allReducer
