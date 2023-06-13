import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListData from './components/Affliate/ListData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      <header className="App-header">
        <h2>Thaigoo4u Affliate Program</h2>
        <ListData/>
      </header>
    </div>
    </>
  )
}

export default App
