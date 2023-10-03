import { View, FlatList, StyleSheet } from 'react-native'
import ErrorMessage from '../ErrorMessage'
import Spinner from '../Spinner'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

export const ItemSeparator = () => <View style={styles.separator} />

const RepositoryListContainer = ({ repositories, error, loading }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  if (loading) {
    return <Spinner size="large" />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default RepositoryListContainer
