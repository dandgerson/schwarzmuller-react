import React, {useState} from 'react';

import './App.css';
import  pikachu from './img/pikachu.png'

import UserInput from './UsetInput'
import UserOutput from './UserOutput'

const App = (props) => {
  const [username, setUsername] = useState('Dmitry')

  const handleChangeUsername = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div className="App">
      <h1>Hi, I'am react App</h1>
      <img src={pikachu} />
      <UserInput username={username} handleChangeUsername={handleChangeUsername} />
      <UserOutput username={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  )
}

export default App;
