import React from 'react'

const widthClass = WrappedComponent => classes => props => (
  <div className={classes.join(' ')}>
    <WrappedComponent {...props} />
  </div>
)

export default widthClass
