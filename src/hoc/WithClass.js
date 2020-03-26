import React from 'react'

const WidthClass = props => (
  <div className={props.classes.join(' ')}>
    {props.children}
  </div>
)

export default WidthClass
