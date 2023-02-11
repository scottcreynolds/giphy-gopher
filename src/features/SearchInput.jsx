import {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

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
      <button title="Search" className='search giphy-search' onClick={handleSubmit}><AiOutlineSearch /></button>
    </>
  )
}
