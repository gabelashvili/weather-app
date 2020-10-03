import React from 'react'
import { useDispatch } from 'react-redux'
import { Input, Div } from 'components/Sidebar/SearchBar/styles'
import { actions } from 'modules/GetCurrenWeathers'

const SearchBar = () => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(actions.filteredCities.request(e.target.value))
  }
  return (
    <Div>
      <Input
        onChange={handleChange}
        type='text'
        placeholder='Search..'
        name='search'
      />
    </Div>
  )
}

export default SearchBar
