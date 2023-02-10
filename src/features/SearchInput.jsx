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
    handleSearch(term)
  }

  return (
    <div>
      <input type="text" placeholder='Search' value={term} onChange={handleChange} />
      <button onClick={handleSubmit}>Go</button>
    </div>
  )
}
