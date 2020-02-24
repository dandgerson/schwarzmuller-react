import React from 'react'

import './UserInput.css'

const UserInput = ({handleChangeUsername, ...props}) => {
  return (
    <div className="UserInput">
      <p>User input!</p>
      <input
        type="text"
        onChange={handleChangeUsername}
      />
    </div>
  )
}

export default UserInput
