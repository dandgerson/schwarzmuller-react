import React, { useEffect } from 'react'

import style from './Cockpit.css'

const Cockpit = ({
  personsLength,
  isPersonsShown,
  handleTogglePersons,
  ...restProps
}) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect')

    const timer = setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000)

    return () => {
      clearTimeout(timer)
      console.log('[Cockpit.js] clean up work in useEffect!')
    }
  }, [])

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect')

    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect!')
    }
  })

  const assignedClasses = []
  personsLength <= 2 && assignedClasses.push(style.red)
  personsLength <= 1 && assignedClasses.push(style.bold)

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

export default React.memo(Cockpit)
