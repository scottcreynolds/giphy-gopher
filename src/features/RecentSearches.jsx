import React from 'react'
// import useLocalStorage from '../util/useLocalStorage'
const RecentSearches = () => {
  // const [recents, setRecents] = useLocalStorage('recents', [])
const recents = []
  return (
    <div>Recent Searches: {recents.join()}</div>
  )
}

export default RecentSearches
