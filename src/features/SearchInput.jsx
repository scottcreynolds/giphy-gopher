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
    search()
  }

  const handleKeyUp = (e) => {
    if(e.key === 'Enter') {
      search()
    }
  }

  const search = () => {
    if(!term) return
    handleSearch(term)
  }

  return (
    <>
      <input className="search" type="text" placeholder='Search' value={term} onChange={handleChange} onKeyUp={handleKeyUp} />
      <button title="Search" className='search giphy-search' onClick={handleSubmit}><AiOutlineSearch /></button>
    </>
  )
}
