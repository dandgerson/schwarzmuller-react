import React, { useEffect } from 'react'

import style from './Cockpit.css'

const Cockpit = ({
  state: { persons, isPersonsShown },
  handlers: { handleTogglePersons },
  ...restProps
}) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
  })

  const assignedClasses = []
  persons.length <= 2 && assignedClasses.push(style.red)
  persons.length <= 1 && assignedClasses.push(style.bold)

  const buttonClasses = []
  isPersonsShown && buttonClasses.push(style.Red)

  return (
    <div className={style.Cockpit}>
      <h1>{restProps.title}</h1>
      <p className={assignedClasses.join(' ')}>Dynamically styled text.</p>
      <button
        className={buttonClasses.join(' ')}
        onClick={handleTogglePersons}
      >
        Toggle persons
      </button>
    </div>
  )
}

export default Cockpit
