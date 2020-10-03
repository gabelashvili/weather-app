import { constants } from 'modules/DetailInfo'

export const detailInfo = ({
  request: (cord) => ({
    type: constants.DETAIL_INFO_REQUESTED,
    payload: {
      cord,
    },
  }),
  succeed: (response) => ({
    type: constants.DETAIL_INFO_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.DETAIL_INFO_FAILED,
    error,
  }),
})
