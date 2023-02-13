import React from 'react'

export const RecentSearches = ({recentSearches, handleSearch}) => {
  const handleClick = (e) => {
    e.preventDefault()
    handleSearch(e.target.innerText)
  }

  return (
    recentSearches && <div>Recent Searches:  {recentSearches.map((search, idx) => {
      return <button className="pill-button" onClick={handleClick} key={idx}>{search}</button>
    })}</div>
  )
}
