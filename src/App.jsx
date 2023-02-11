import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SearchInput } from './features/SearchInput'
import { searchGifs, getTrendingGifs } from './api/giphy'
import { RecentSearches } from './features/RecentSearches'
import { getRecentSearches, addRecentSearch } from './api/user'
import Masonry from 'react-masonry-css'
import useIntersectionObserver from '@react-hook/intersection-observer'

const breakpointCols = {
  default: 3,
  1100: 2,
  700: 1
}

function App() {
  const [count, setCount] = useState(0)
  const [gifs, setGifs] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [ref, setRef] = useState()
  const {isIntersecting} = useIntersectionObserver(ref)
  const [term, setTerm] = useState('')
  const [searchType, setSearchType] = useState('trending')

  const handleSearch = async (term) => {
    const results = await searchGifs(term)
    setGifs(results)
    setTerm(term)
    setRecentSearches(await addRecentSearch(term))
  }

  const getTrending = async () => {
    const results = await getTrendingGifs()
    setGifs(results)
  }

  useEffect(() => {
    const results = getRecentSearches()
    setRecentSearches(results)
  }, [])

  useEffect(() => {
    const getNextPage = async () => {
      let results = []
      if(searchType === 'trending') {
        results = await getTrendingGifs(gifs.length)
      } else {
        results = await searchGifs(term, gifs.length)
      }
      setGifs([...gifs, ...results])
    }
    if(isIntersecting) {
      getNextPage()
    }
  }, [isIntersecting])

  return (
    <div className="App">
      <SearchInput handleSearch={handleSearch}/>
      <button onClick={getTrending}>Get Trending</button>
      <RecentSearches handleSearch={handleSearch} recentSearches={recentSearches} />
      <Masonry breakpointCols={breakpointCols} className="results-grid" columnClassName='results-col'>
        {gifs.map((gif) => (
          <div><img src={gif.images.downsized.url} /></div>
        ))}
      </Masonry>
      {gifs.length > 0 && <hr ref={setRef} />}
    </div>
  )
}

export default App
