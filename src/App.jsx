import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Scard from './components/Scard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Scard/>
    </>
  )
}

export default App
