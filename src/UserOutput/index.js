import React from 'react'

import './UserOutput.css'

const UserOutput = (props) => {
  const style = {
    cursor: 'pointer',
  }
  return (
    <div className="UserOutput">
      <p>User output!</p>
      <p
        style={style}
      />
    </div>
  )
}

export default UserOutput
