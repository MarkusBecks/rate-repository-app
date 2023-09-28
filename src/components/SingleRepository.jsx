import RepositoryItem from './RepositoryList/RepositoryItem'
import { Pressable, StyleSheet, View } from 'react-native'
import Spinner from './Spinner'
import { useParams } from 'react-router-native'
import useRepository from '../hooks/useRepository'
import * as Linking from 'expo-linking'
import ErrorMessage from './ErrorMessage'
import theme from '../themes/theme'
import Subheading from './Subheading'

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 6,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.primary,
  },
})

const SingleRepository = ({ showGitHubButton }) => {
  const { id } = useParams()
  const { data, loading, error } = useRepository(id)

  const repository = data?.repository
  const url = data?.repository.url

  // Open the link in browser
  const openGitHubLink = () => {
    if (url) {
      Linking.openURL(url)
    }
  }

  if (loading) {
    return <Spinner size="large" />
  }

  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <View style={{ backgroundColor: 'white' }}>
      <RepositoryItem repository={repository} />
      {showGitHubButton && (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={openGitHubLink}>
            <Subheading color="white">Open in GitHub</Subheading>
          </Pressable>
        </View>
      )}
    </View>
  )
}

export default SingleRepository
