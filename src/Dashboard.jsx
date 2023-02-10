import {useEffect, useState, useContext} from 'react'
import { Grid, SearchBar, SearchContext, SearchContextManager, SuggestionBar } from '@giphy/react-components'
// import { GiphyFetch } from '@giphy/js-fetch-api'
import { Search } from './features/Search.jsx'

// const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)
// const fetchGifs = (offset) => gf.trending({ offset, limit: 25 })

const Dashboard = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext)

  return (
    <>
      <Search />
      <Grid width={800} columns={3} fetchGifs={fetchGifs} key={searchKey} />
    </>
  )
}

export default Dashboard
