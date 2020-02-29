import React from 'react'

const LengthChecker = ({ length, demand }) => {
  let result = ''
  switch (true) {
    case length < demand: {
      result = 'Text too short'
      break
    }
    case length > demand: {
      result = 'Text long anough'
      break
    }
    default: {
      result = 'Text length is valid'
      break
    }
  }

  return (
    <p>{result}</p>
  )
}

export default LengthChecker
