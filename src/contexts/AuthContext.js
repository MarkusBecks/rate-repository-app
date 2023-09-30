import { createContext, useContext } from 'react'
import useLoginStatus from '../hooks/useLoginStatus'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}
// Provide the user's login status to all children
export const AuthProvider = ({ children }) => {
  const { data, error, loading } = useLoginStatus()

  return (
    <AuthContext.Provider value={{ data, error, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
