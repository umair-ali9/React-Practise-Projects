import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)

  const addValue = () => {
    if (counter < 6) {
      setcounter(counter + 1)
    } else {
      alert("Value is 6 BRO!!")
    }
  }

  const removeValue = () => {
    if (counter > 0) {
    setcounter(counter - 1)
    } else {
      alert("Value is zero. We can't go down SORRY!")
    }
  }

  return (
    <>
      <h1>Umair</h1>
      <h2>Counter = {counter}</h2>
      <button onClick={addValue}>Increase</button>
      <button onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
