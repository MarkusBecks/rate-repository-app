import { FlatList, StyleSheet, View } from 'react-native'
import Spinner from '../Spinner'
import { useParams } from 'react-router-native'
import useRepository from '../../hooks/useRepository'
import ErrorMessage from '../ErrorMessage'
import RepositoryInfo from './RepositoryInfo'
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const SingleRepository = () => {
  const { id } = useParams()
  const { data, loading, error } = useRepository(id)

  const repository = data?.repository
  const reviews = data?.repository.reviews
  const reviewNodes = reviews ? reviews.edges.map((edge) => edge.node) : []

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
