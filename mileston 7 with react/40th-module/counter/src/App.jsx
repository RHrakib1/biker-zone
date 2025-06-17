import { useState } from 'react'
import './App.css'

import Country from './Country/Country'
function App() {

  const [dekhaise, setdekhaise] = useState(true)

  const handelClick = () => {
    setdekhaise(!dekhaise)
  }
  return (
    <>
      <button onClick={handelClick}>{dekhaise?'complete':'go away'}</button>
      {dekhaise ? 'ami dekhsi' : 'kisui nai'}
      <h1>Vite + React</h1>
      <Country></Country>
    </>
  )
}

export default App
