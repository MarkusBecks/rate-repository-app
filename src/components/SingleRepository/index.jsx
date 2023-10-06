import { FlatList, StyleSheet, View } from 'react-native'
import Spinner from '../Utility/Spinner'
import { useParams } from 'react-router-native'
import useRepository from '../../hooks/useRepository'
import ErrorMessage from '../Utility/ErrorMessage'
import RepositoryInfo from './RepositoryInfo'
import ReviewItem from '../Reviews/ReviewItem'
import ItemSeparator from '../Utility/ItemSeparator'

const SingleRepository = () => {
  const { id } = useParams()
  const { data, loading, error, fetchMore } = useRepository({ id, first: 6 })

  const repository = data?.repository
  const reviews = data?.repository.reviews
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []

  const onEndReach = () => {
    fetchMore()
    console.log('You have reached the end of the list')
  }

  if (loading) {
    return <Spinner size="large" />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <>
      <FlatList
        data={reviewNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={
          <>
            <RepositoryInfo repository={repository} />
            <ItemSeparator />
          </>
        }
        ListFooterComponent={ItemSeparator}
      />
    </>
  )
}

export default SingleRepository
