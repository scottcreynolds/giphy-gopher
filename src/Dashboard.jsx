import React from 'react'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY)
const fetchGifs = (offset) => gf.trending({ offset, limit: 25 })
const Dashboard = () => {
  return (
    <Grid width={800} columns={3} fetchGifs={fetchGifs} />
  )
}

export default Dashboard
