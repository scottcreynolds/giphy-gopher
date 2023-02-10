import React from 'react'

export const RecentSearches = ({recentSearches}) => {
  return (
    <div>Recent Searches:  {recentSearches?.join()}</div>
  )
}
