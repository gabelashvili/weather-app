import React, { useEffect, useRef } from 'react'
import { Div, P } from 'components/Sidebar/City/styles'
import { useHistory } from 'react-router-dom'
import qs from 'qs'

const City = ({ data }) => {
  const history = useHistory()
  const ref = useRef()
  const params = qs.parse(history.location.search,
    { ignoreQueryPrefix: true })

  const isActive = data.coord.lon === Number(params.lon)
    && data.coord.lat === Number(params.lat)

  const handleClick = (coord) => () => {
    const query = qs.stringify(coord)
    history.push(`cords?${query}`)
  }
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView()
    }
  }, [])
  return (
    <Div
      isActive={isActive}
      onClick={handleClick(data.coord)}
      ref={isActive ? ref : null}
    >
      <P>{data.name.replace(/'/g, '')}</P>
      <P>
        {`${parseInt(data.main.temp, 10)}°`}
      </P>
    </Div>
  )
}

export default City
