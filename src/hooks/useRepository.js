import { GET_REPOSITORY } from '../graphql/queries'
import { useQuery } from '@apollo/client'

const useRepository = (variables) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: 'cache-and-network',
  })

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  return { data, error, loading, fetchMore: handleFetchMore }
}

export default useRepository
