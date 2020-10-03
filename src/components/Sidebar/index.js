import React from 'react'
import { Div, CityWrapper } from 'components/Sidebar/style'
import SearchBar from 'components/Sidebar/SearchBar'
import City from 'components/Sidebar/City'
import { selectors } from 'modules/GetCurrenWeathers'
import { useSelector } from 'react-redux'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

const SideBar = () => {
  const cities = useSelector(selectors.selectFilteredCities)
  return (
    <Div>
      <SearchBar />
      <CityWrapper>
        <SimpleBar style={{ maxHeight: '100%' }}>
          {cities?.data?.list?.map((city) => (
            <City
              data={city}
              key={city.name}
            />
          ))}
        </SimpleBar>
      </CityWrapper>
    </Div>
  )
}

export default SideBar
