import React, { useState } from 'react';

import './App.css';

import LengthChecker from './LengthChecker'

const App = (props) => {
  const [str, setStr] = useState('')

  const handleChangeStr = (event) => {
    setStr(event.target.value)
  }

  return (
    <div className="App">
      <h1>Hi, I'am react App</h1>
      <input type="text" onChange={handleChangeStr} value={str} />
      <p>{str.length}</p>

      <LengthChecker length={str.length} />
    </div>
  )
}

export default App;
