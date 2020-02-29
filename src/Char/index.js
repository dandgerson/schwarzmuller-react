import React from 'react'

const Char = ({ char, handleClick, id }) => {
  const style = {
    width: '16px',
    height: '16px',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center',
    cursor: 'pointer',
  }

  return (
    <div
    onClick={handleClick.bind(null, id)}
    style={style}>
      <span>{char}</span>
    </div>
  )
}

export default Char
