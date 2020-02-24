import React, {useState} from 'react';

import './App.css';

import UserInput from './UsetInput'
import UserOutput from './UserOutput'

const App = (props) => {
  const [username, setUsername] = useState('Dmitry')

  return (
    <div className="App">
      <h1>Hi, I'am react App</h1>
      <UserInput />
      <UserOutput username={username} />
      <UserOutput username={username} />
      <UserOutput username={username} />
    </div>
  )
}

export default App;
