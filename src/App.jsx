import { useState } from 'react'
import Dashboard from './Dashboard'
import reactLogo from './assets/react.svg'
import './App.css'
import { SearchContextManager } from '@giphy/react-components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SearchContextManager apiKey={import.meta.env.VITE_GIPHY_API_KEY}>
        <Dashboard />
      </SearchContextManager>
    </div>
  )
}

export default App
