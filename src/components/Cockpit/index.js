import React, { useEffect, useRef } from 'react'

import AuthContext from 'src/context/AuthContext'

import style from './Cockpit.css'

const Cockpit = ({
  personsLength,
  isPersonsShown,
  handleTogglePersons,
  ...other
}) => {
  const refs = {
    button: useRef(null),
  }

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')

    console.log({ buttonEl: refs.button.current })

    const timer = setTimeout(() => {
      console.warn('Saved data to cloud!')
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
      <h1>{other.title}</h1>
      <p className={assignedClasses.join(' ')}>Dynamically styled text.</p>
      <button
        className={buttonClasses.join(' ')}
        onClick={handleTogglePersons}
      >
        Toggle persons
      </button>
      <AuthContext.Consumer>
        {context => context.isAuthenticated ? (
          <button
            onClick={context.handleLogout}
            ref={refs.button}
            style={{
              marginLeft: '4px',
            }}
          >
            Logout
          </button>
        ) : (
            <button
              onClick={context.handleLogin}
              ref={refs.button}
              style={{
                marginLeft: '4px',
              }}
            >
              Login
            </button>
          )}
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(Cockpit)
