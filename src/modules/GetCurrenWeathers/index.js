import * as constants from 'modules/GetCurrenWeathers/constants'
import * as actions from 'modules/GetCurrenWeathers/actions'
import reducers from 'modules/GetCurrenWeathers/reducers'
import * as selectors from 'modules/GetCurrenWeathers/selectors'
import sagas from 'modules/GetCurrenWeathers/sagas'

const moduleName = 'GetCurrenWeathers'

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
}
