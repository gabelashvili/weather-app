import { createSelector } from 'reselect'
import { moduleName } from 'modules/GetCurrenWeathers'

export const selectCities = createSelector(
  (state) => state[moduleName],
  (cities) => cities.cities,
)

export const selectFilteredCities = createSelector(
  (state) => state[moduleName],
  (cities) => cities.filteredCities,
)