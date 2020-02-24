import React from 'react'

import './UserOutput.css'

const UserOutput = ({username, ...props}) => {
  return (
    <div className="UserOutput">
      <p>User output!</p>
      <p>{`username: ${username}`}</p>
      <p>First paragraph</p>
      <p>Second</p>
    </div>
  )
}

export default UserOutput
