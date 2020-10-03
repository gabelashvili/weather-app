import React from 'react'
import {
  Box,
  CityName,
  CurrentTime,
  Img,
  CurrentWeather,
  WeatherType,
  Date,
  Detail,
  DetailWrapper,
} from 'components/DetailInfo/TopPart/Detail/styles'
import ClockIcon from 'components/DetailInfo/TopPart/Detail/ClockIcon'
import { getDate } from 'helpers/index'
import { useHistory } from 'react-router-dom'
import qs from 'qs'
import { useSelector } from 'react-redux'
import { selectors } from 'modules/GetCurrenWeathers'

const TopPart = () => {
  const history = useHistory()
  const cities = useSelector(selectors.selectCities)
  const params = qs.parse(history.location.search,
    { ignoreQueryPrefix: true })
  const selectedCity = cities?.data?.list?.find((city) => city
    .coord.lon === Number(params.lon)
        && city.coord.lat === Number(params.lat))
  return (
    <>
      <Box>
        <CityName>{selectedCity && selectedCity.name}</CityName>
        <CurrentTime>
          {selectedCity && getDate(selectedCity.dt).hours}
          { selectedCity && `:${getDate(selectedCity.dt).minutes}`}
          <ClockIcon />
        </CurrentTime>
        <CurrentWeather>
          <Img src={`http://openweathermap.org/img/wn/${selectedCity?.weather[0]?.icon}@2x.png`} alt='' />
          <WeatherType>Clear Sky</WeatherType>
          <Date>
            Thuersday
            {' '}
            {getDate(selectedCity?.dt)?.hours}
            :
            {getDate(selectedCity?.dt)?.minutes}
          </Date>
          <DetailWrapper>
            <Detail>
              Wind
              {' '}
              {selectedCity?.wind.speed}
              m/s
            </Detail>
            <Detail>
              Preassure
              {' '}
              {selectedCity?.main.pressure}
              hPa
            </Detail>
          </DetailWrapper>
          <DetailWrapper>
            <Detail>
              Humidity
              {' '}
              {selectedCity?.main.humidity}
              %
            </Detail>
            <Detail>
              Cloudiness
              {' '}
              {selectedCity?.clouds?.all}
              %
            </Detail>
          </DetailWrapper>
        </CurrentWeather>
      </Box>
    </>
  )
}

export default TopPart
