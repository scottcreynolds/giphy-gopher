import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SearchInput } from './features/SearchInput'
import { searchGifs } from './api/giphy'

function App() {
  const [count, setCount] = useState(0)

  const handleSearch = async (term) => {
    const results = await searchGifs(term)
    console.log(results)
  }

  return (
    <div className="App">
      <SearchInput handleSearch={handleSearch} />
    </div>
  )
}

export default App
