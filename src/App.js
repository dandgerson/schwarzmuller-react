import React, { useState } from 'react';

import './App.css';

import LengthChecker from './LengthChecker'
import Char from './Char'

const App = (props) => {
  const [str, setStr] = useState('')

  const handleChangeStr = (event) => {
    setStr(event.target.value)
  }

  const handleDeletChar = (id) => {
    setStr(str.split('').filter((_, i) => !(i === id)).join(''))
  }

  return (
    <div className="App">
      <h1>Hi, I'am react App</h1>
      <input type="text" onChange={handleChangeStr} value={str} />
      <p>{str.length}</p>
      <div style={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
      }}>
        {str.split('').map((char, i) => (
          <Char
            key={i}
            id={i}
            char={char}
            handleClick={handleDeletChar} />
        ))}
      </div>

      <LengthChecker
        length={str.length}
        demand={5} />
    </div>
  )
}

export default App;
