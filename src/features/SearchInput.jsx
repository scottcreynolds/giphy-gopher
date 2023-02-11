//create a react arrow function component called SearchInput and export it

import {useState} from 'react'

export const SearchInput = ({handleSearch}) => {
  const [term, setTerm] = useState('')
  const handleChange = (e) => {
    setTerm(e.target.value)
    e.preventDefault()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!term) return
    handleSearch(term)
  }

  return (
    <>
      <input className="search" type="text" placeholder='Search' value={term} onChange={handleChange} />
      <button className='search' onClick={handleSubmit}>Go</button>
    </>
  )
}
