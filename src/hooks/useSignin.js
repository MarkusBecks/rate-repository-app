import { useMutation, useApolloClient } from '@apollo/client'
import { AUTHENTICATE } from '../graphql/mutations'
import useAuthStorage from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage()
  const apolloClient = useApolloClient()
  const [authenticate, result] = useMutation(AUTHENTICATE)

  const signIn = async ({ username, password }) => {
    try {
      const response = await authenticate({
        variables: { username, password },
      })

      const accessToken = response.data?.authenticate.accessToken
      await authStorage.setAccessToken(accessToken)
      await apolloClient.resetStore()

      return response
    } catch (error) {
      console.error('Authentication error: ', error)
      throw error
    }
  }

  return [signIn, result]
}

export default useSignIn
