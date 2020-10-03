import React from 'react'
import {
  Div, Time, Temp, Img, Box, Wrapper,
} from 'components/DetailInfo/BottomPart/styles'
import { getDate } from 'helpers/index'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const BottomPart = ({ data }) => (
  <Wrapper>
    <SimpleBar autoHide={false} forceVisible>
      <Div>
        {data && data.map((weather) => (
          <Box key={weather.dt}>
            <Time>
              {getDate(weather.dt).hours}
              {`:${getDate(weather.dt).minutes}`}
            </Time>
            <Temp>
              {parseInt(weather.temp, 10)}
              °
            </Temp>
            <Img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='' />
          </Box>
        ))}
      </Div>
    </SimpleBar>
  </Wrapper>
)

export default BottomPart
