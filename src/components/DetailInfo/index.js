import React from 'react'
import styled from 'styled-components'
import TopPart from 'components/DetailInfo/TopPart'
import BottomPart from 'components/DetailInfo/BottomPart'
import { selectors } from 'modules/DetailInfo'
import { useSelector } from 'react-redux'
import Bg from 'Images/cityBg.jpg'

const Div = styled.div`
    display: grid;
    grid-template-rows: 2.1fr 1fr;
    background-image: url(${Bg});
`

const DetailInfo = () => {
  const { data } = useSelector(selectors.selectDetailInfo)
  return (
    <Div>
      <TopPart dailyData={data.daily} />
      <BottomPart data={data.hourly} />
    </Div>
  )
}

export default DetailInfo
