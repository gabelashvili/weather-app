import {
  put, takeLatest, call,
} from 'redux-saga/effects'
import { getDetailInfo } from 'helpers/gateway'
import { actions, constants } from 'modules/DetailInfo'

function* detailInfo(action) {
  const { cord } = action.payload
  try {
    const response = yield call(getDetailInfo, cord)
    yield put(actions.detailInfo.succeed(response))
  } catch (error) {
    yield put(actions.detailInfo.failed(error))
  }
}

export default function* () {
  yield takeLatest(constants.DETAIL_INFO_REQUESTED, detailInfo)
}
