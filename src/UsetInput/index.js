import React from 'react'

import './UserInput.css'

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <p>User input!</p>
      <input
        type="text"
        // onChange={props.handleChange}
        // value={props.name}
      />
    </div>
  )
}

export default UserInput