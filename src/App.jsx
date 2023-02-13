import { useState, useEffect } from 'react'
import './App.css'
import { SearchInput } from './features/SearchInput'
import { searchGifs, getTrendingGifs } from './api/giphy'
import { RecentSearches } from './features/RecentSearches'
import { getRecentSearches, addRecentSearch } from './api/user'
import { SearchResults } from './features/SearchResults'
import useIntersectionObserver from '@react-hook/intersection-observer'
import { AiOutlineStock } from 'react-icons/ai'
import { NoResultsSad } from './features/NoResultsSad';

function App() {
  const [gifs, setGifs] = useState([])
  const [recentSearches, setRecentSearches] = useState([])
  const [ref, setRef] = useState()
  const {isIntersecting} = useIntersectionObserver(ref)
  const [term, setTerm] = useState('')
  const [searchType, setSearchType] = useState('')
  const [oopsNoResults, setOopsNoResults] = useState(false)

  const ShowingResultsFor = () => {
    return(searchType && !oopsNoResults && <h2>Showing results for: {searchType === 'trending' ? "Trending" : term}</h2>)
  }

  const SearchExperience = () => {
    return(
      <div>
        <SearchInput handleSearch={handleSearch} />
        <button title="Trending" className="search giphy-trending" onClick={getTrending}>
          <AiOutlineStock />
        </button>
      </div>
    )
  }

  const handleSearch = async (term) => {
    const results = await searchGifs(term)
    setGifs(results)
    setTerm(term)
    setSearchType('search')
    setOopsNoResults(results.length === 0)
    setRecentSearches(await addRecentSearch(term))
  }

  const getTrending = async () => {
    const results = await getTrendingGifs()
    setGifs(results)
    setSearchType('trending')
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
      <h1>Giphy Grabber - Grab You a Gif</h1>
      <SearchExperience />
      <RecentSearches handleSearch={handleSearch} recentSearches={recentSearches} />
      <hr />
      <ShowingResultsFor />
      <NoResultsSad oopsNoResults={oopsNoResults} searchTerm={term} />
      <SearchResults gifs={gifs} />
      {gifs.length > 0 && <hr ref={setRef} />}
    </div>
  )
}

export default App
