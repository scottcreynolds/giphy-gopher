import React from 'react'
import { Grid, SearchContext, SearchContextManager } from '@giphy/react-components'

import Search from './features/Search'

const Dashboard = () => {
  const { fetchGifs, searchKey } = React.useContext(SearchContext)
  return (
    <SearchContextManager apiKey={import.meta.env.VITE_GIPHY_API_KEY}>
      <Search />
      <Grid width={800} columns={3} fetchGifs={fetchGifs} key={searchKey} />
    </SearchContextManager>
  )
}

export default Dashboard
