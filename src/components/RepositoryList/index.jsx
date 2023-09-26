import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native'
import Text from '../Text'
import FlexColumnCenter from '../FlexColumnCenter'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../../hooks/useRepositories'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories, error, loading } = useRepositories()

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  if (loading) {
    return (
      <FlexColumnCenter>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </FlexColumnCenter>
    )
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    )
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

export default RepositoryList