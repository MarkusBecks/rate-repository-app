import { FlatList, View, StyleSheet, Pressable } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import ErrorMessage from '../ErrorMessage'
import Spinner from '../Spinner'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../../hooks/useRepositories'
import SortingMenu from './SortingMenu'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
})

export const ItemSeparator = () => <View style={styles.separator} />

export const RepositoryListContainer = ({ repositories, error, loading }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  const navigate = useNavigate()

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
      renderItem={({ item }) => (
        <Pressable onPress={() => navigate(`/${item.id}`)}>
          <RepositoryItem repository={item} />
        </Pressable>
      )}
      keyExtractor={(item) => item.id}
    />
  )
}

const RepositoryList = () => {
  const [sortCriteria, setSortCriteria] = useState('')

  const { repositories, error, loading } = useRepositories(
    sortCriteria.orderBy,
    sortCriteria.orderDirection
  )

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria)
  }

  return (
    <View>
      <SortingMenu selectedOption={sortCriteria} onSelect={handleSortChange} />
      <RepositoryListContainer
        repositories={repositories}
        error={error}
        loading={loading}
      />
    </View>
  )
}

export default RepositoryList
