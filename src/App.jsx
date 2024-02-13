import { useState } from 'react'
import MainContainer from './components/MainContainer/index.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainContainer/>
    </>
  )
}

export default App
