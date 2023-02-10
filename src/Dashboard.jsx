import React from 'react'
import { Grid, SearchBar, SearchContext, SearchContextManager, SuggestionBar } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)
const fetchGifs = (offset) => gf.trending({ offset, limit: 25 })

const SearchExperience = () => (
  <SearchContextManager apiKey={import.meta.env.VITE_GIPHY_API_KEY}>
    <Components />
  </SearchContextManager>
)

const Components = () => {
  const { fetchGifs, searchKey } = React.useContext(SearchContext)
  return (
    <>
      <SearchBar />
      <SuggestionBar />
      <Grid width={800} columns={3} fetchGifs={fetchGifs} key={searchKey} />
    </>
  )
}
const Dashboard = () => {
  return (
    // <Grid width={800} columns={3} fetchGifs={fetchGifs} />
    <SearchExperience />
  )
}

export default Dashboard
