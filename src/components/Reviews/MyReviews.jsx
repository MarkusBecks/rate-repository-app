import useUser from '../../hooks/useUser'
import ReviewItem from './ReviewItem'
import ItemSeparator from '../Utility/ItemSeparator'
import { FlatList, View, StyleSheet } from 'react-native'
import ErrorMessage from '../Utility/ErrorMessage'
import Spinner from '../Utility/Spinner'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
})

const MyReviews = () => {
  const { data, loading, error } = useUser({ includeReviews: true })

  if (loading) {
    return <Spinner size="large" />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  const reviews = data.me.reviews.edges.map((edge) => edge.node)

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default MyReviews
