import { GET_REPOSITORIES } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepositories = (orderBy, orderDirection) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: 'cache-and-network',
  })

  return { repositories: data?.repositories, error, loading }
}

export default useRepositories
