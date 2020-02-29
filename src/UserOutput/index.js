import React from 'react'

import './UserOutput.css'

const UserOutput = ({ username, ...props }) => {
  const style = {
    fontWeight: 'normal',
    textDecorationLine: 'underline',
  }

  return (
    <div className="UserOutput">
      <p className='UserOutput_title'>User output!</p>
      <p>
        <span style={style}>username</span>: <span className='UserOutput_output'>{`${username}`}</span>
      </p>
    </div>
  )
}

export default UserOutput
