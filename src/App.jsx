import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SearchInput } from './features/SearchInput'
import { searchGifs, getTrendingGifs } from './api/giphy'
import { RecentSearches } from './features/RecentSearches'
import { getRecentSearches, addRecentSearch } from './api/user'
import Masonry from 'react-masonry-css'

const breakpointCols = {
  default: 3,
  1100: 2,
  700: 1
}

function App() {
  const [count, setCount] = useState(0)
  const [gifs, setGifs] = useState([])
  const [recentSearches, setRecentSearches] = useState([])

  const handleSearch = async (term) => {
    const results = await searchGifs(term)
    console.log(results)
    setGifs(results)
    setRecentSearches(await addRecentSearch(term))
  }

  const getTrending = async () => {
    const results = await getTrendingGifs()
    console.log(results)
    setGifs(results)
  }

  useEffect(() => {
    const results = getRecentSearches()
    setRecentSearches(results)
  }, [])

  return (
    <div className="App">
      <SearchInput handleSearch={handleSearch}/>
      <button onClick={getTrending}>Get Trending</button>
      <RecentSearches recentSearches={recentSearches} />
      <Masonry breakpointCols={breakpointCols} className="results-grid" columnClassName='results-col'>
        {gifs.map((gif) => (
          <div><img src={gif.images.downsized.url} /></div>
        ))}
      </Masonry>
    </div>
  )
}

export default App
