import React from 'react'
import {
  Div, City, Day, Icon, Temp,
} from 'components/DetailInfo/TopPart/SideBar/styles'
import { getDate } from 'helpers/index'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { selectors } from 'modules/DetailInfo'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const { data: dailyData } = useSelector(selectors.selectDetailInfo)
  return (
    <Div>
      <SimpleBar style={{ maxHeight: '100%' }}>
        {dailyData && dailyData?.daily?.map((weather) => (
          <City key={weather.dt}>
            <Day>{weather && getDate(weather.dt).day.substring(0, 3)}</Day>
            <Icon src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <Temp>
              {`${parseInt(weather.temp.min, 10)}°`}
              {` / ${parseInt(weather.temp.max, 10)}°` }
            </Temp>
          </City>
        ))}
      </SimpleBar>
    </Div>
  )
}
export default SideBar
