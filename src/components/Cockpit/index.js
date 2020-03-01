import React from 'react'

import style from './Cockpit.css'

const Cockpit = ({state, handlers}) => {
  
  const assignedClasses = []
  state.persons.length <= 2 && assignedClasses.push(style.red)
  state.persons.length <= 1 && assignedClasses.push(style.bold)

  let buttonClasses = ''
  state.isPersonsShown && (buttonClasses = style.Red)

  return (
  <div className={style.Cockpit}>
    <h1>Hi, I'am react App</h1>
    <p className={assignedClasses.join(' ')}>Dynamically styled text.</p>
    <button
      className={buttonClasses}
      onClick={handlers.handleTogglePersons}
    >
      Toggle persons
      </button>
  </div>
)}

export default Cockpit
