import { createContext, useContext } from 'react'
import useUser from '../hooks/useUser'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}
// Provide the user's login status to all children
export const AuthProvider = ({ children }) => {
  const { data, error, loading } = useUser()

  return (
    <AuthContext.Provider value={{ data, error, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
