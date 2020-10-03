import React, { useEffect } from 'react'
import { Div, Section } from 'components/Root/styles'
import SideBar from 'components/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { actions, selectors } from 'modules/GetCurrenWeathers'
import { actions as detailInfoActions } from 'modules/DetailInfo'
import { useHistory } from 'react-router-dom'
import qs from 'qs'
import DetailInfo from 'components/DetailInfo'

const App = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const cities = useSelector(selectors.selectCities)
  const params = qs.parse(history.location.search,
    { ignoreQueryPrefix: true })
  const searcCity = cities?.data?.list?.find((city) => city
    .coord.lon === Number(params.lon)
        && city.coord.lat === Number(params.lat))

  useEffect(() => {
    dispatch(actions.currentWeather.request())
  }, [dispatch])

  useEffect(() => {
    if (cities.statuses.isSucceed) {
      if (!searcCity) {
        const query = qs.stringify(cities.data.list[0].coord)
        history.push(`cords?${query}`)
      }
    }
  }, [cities, history, searcCity])

  useEffect(() => {
    if (params.lon && params.lat && searcCity) {
      dispatch(detailInfoActions.detailInfo.request(params))
    }
  }, [dispatch, params, searcCity])

  return (
    <Div>
      <Section>
        <SideBar />
        <DetailInfo />
      </Section>
    </Div>
  )
}

export default App
