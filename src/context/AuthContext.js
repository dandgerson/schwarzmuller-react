
import React from 'react'

const AuthContext = React.createContext({
  isAuthenticated: false,
  handleLogin: () => { },
  handleLogout: () => { },
})

export default AuthContext
