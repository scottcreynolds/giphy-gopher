export const getRecentSearches = () => {
  const searches = localStorage.getItem('searches')
  if (searches) {
    return JSON.parse(searches)
  }
  return []
}

export const addRecentSearch = (search) => {
  // add to localstorage, most recent first
  const searches = getRecentSearches()
  searches.unshift(search)
  // dedupe because I am lazy and type the same thing for testing a bunch
  // also limit to something reasonable
  const dedupedSearches = Array.from(new Set(searches)).slice(0,5)
  localStorage.setItem('searches', JSON.stringify(dedupedSearches))
  return dedupedSearches
}
