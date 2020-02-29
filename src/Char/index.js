import React from 'react'

const Char = ({ char }) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
  }

  return (
    <div style={style}>
      <span>{char}</span>
    </div>
  )
}

export default Char
