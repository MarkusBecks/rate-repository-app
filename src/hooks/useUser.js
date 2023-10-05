import { ME } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useUser = ({ includeReviews }) => {
  const { data, error, loading } = useQuery(ME, {
    variables: { includeReviews: includeReviews },
    fetchPolicy: 'cache-and-network',
  })

  return { data, error, loading }
}

export default useUser
