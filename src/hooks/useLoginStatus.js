import { ME } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useLoginStatus = () => {
  const { data, error, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
  })
  return { data, error, loading }
}

export default useLoginStatus
