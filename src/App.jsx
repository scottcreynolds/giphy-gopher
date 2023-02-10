import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SearchInput } from './features/SearchInput'
import { searchGifs, getTrendingGifs } from './api/giphy'
import Masonry from 'react-masonry-css'

const breakpointCols = {
  default: 3,
  1100: 2,
  700: 1
}

function App() {
  const [count, setCount] = useState(0)
  const [gifs, setGifs] = useState([])

  const handleSearch = async (term) => {
    const results = await searchGifs(term)
    console.log(results)
    setGifs(results)
  }

  const getTrending = async () => {
    const results = await getTrendingGifs()
    console.log(results)
    setGifs(results)
  }

  return (
    <div className="App">
      <SearchInput handleSearch={handleSearch}/>
      <button onClick={getTrending}>Get Trending</button>
      <Masonry breakpointCols={breakpointCols} className="results-grid" columnClassName='results-col'>
        {gifs.map((gif) => (
          <div><img src={gif.images.downsized.url} /></div>
        ))}
      </Masonry>
    </div>
  )
}

export default App
