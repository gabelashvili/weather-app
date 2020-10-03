import { constants } from 'modules/DetailInfo'

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
    isFinished: false,
  },
  data: [],
}

const detailInfo = (state = initialState, action) => {
  switch (action.type) {
    case constants.DETAIL_INFO_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      }
    case constants.DETAIL_INFO_SUCCEED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isFinished: true,
        },
        data: action.response.data,
        statusCode: action.response.status,
      }
    case constants.DETAIL_INFO_FAILED:
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

export default detailInfo
