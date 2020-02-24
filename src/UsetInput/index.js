import React from 'react'

import './UserInput.css'

const UserInput = ({handleChangeUsername, username, ...props}) => {
  return (
    <div className="UserInput">
      <p>User input!</p>
      <input
        type="text"
        onChange={handleChangeUsername}
        value={username}
      />
    </div>
  )
}

export default UserInput
