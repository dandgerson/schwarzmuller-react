import React, { useState } from 'react';

import './App.css';

import LengthChecker from './LengthChecker'
import Char from './Char'

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

      {str.split('').map(char => (
        <Char char={char} />
      ))}

      <LengthChecker
        length={str.length}
        demand={5} />
    </div>
  )
}

export default App;
