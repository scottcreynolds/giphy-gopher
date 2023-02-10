export const getRecentSearches = () => {
  // get from localstorage
  const searches = localStorage.getItem('searches')
  console.log(searches)
  if (searches) {
    return JSON.parse(searches)
  }
  return []
}

export const addRecentSearch = (search) => {
  // add to localstorage
  const searches = getRecentSearches()
  searches.unshift(search)
  localStorage.setItem('searches', JSON.stringify(searches))
  console.log("bye")
  return searches
}
