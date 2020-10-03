import { createSelector } from 'reselect'
import { moduleName } from 'modules/DetailInfo'

export const selectDetailInfo = createSelector(
  (state) => state[moduleName],
  (data) => data,
)
