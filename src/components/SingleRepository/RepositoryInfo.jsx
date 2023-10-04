import RepositoryItem from '../RepositoryList/RepositoryItem'
import { View, Pressable, StyleSheet } from 'react-native'
import * as Linking from 'expo-linking'
import Subheading from '../Utility/Subheading'
import theme from '../../themes/theme'

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 60,
    paddingBottom: 30,
    backgroundColor: 'white',
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

const RepositoryInfo = ({ repository }) => {
  const { url } = repository

  const openGitHubLink = () => {
    if (url) {
      Linking.openURL(url)
    }
  }

  return (
    <>
      <RepositoryItem repository={repository} />
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={openGitHubLink}>
          <Subheading color="white">Open in GitHub</Subheading>
        </Pressable>
      </View>
    </>
  )
}

export default RepositoryInfo
