import { FlatList } from 'react-native'
import ErrorMessage from '../Utility/ErrorMessage'
import Spinner from '../Utility/Spinner'
import RepositoryItem from './RepositoryItem'
import ItemSeparator from '../Utility/ItemSeparator'

const RepositoryListContainer = ({
  repositories,
  onEndReach,
  error,
  loading,
}) => {
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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default RepositoryListContainer
