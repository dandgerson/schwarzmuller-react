import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`

const Person = ({
  handleClick = () => { },
  handleChange = () => { },
  ...props
}) => {
  const styleText = {
    cursor: 'pointer',
  }

  return (
    <StyledDiv>
      <p>I'm a Person!</p>
      <p
        onClick={handleClick}
        style={styleText}
      >My name is {props.name} and I am {props.age} years old.</p>
      <input
        type="text"
        onChange={handleChange}
        value={props.name}
      />
      {props.children && props.children}
    </StyledDiv>
  )
}

export default Person
