import { StyleSheet, View, Pressable, Alert } from 'react-native'
import theme from '../../themes/theme'
import Text from '../Utility/Text'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
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
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    backgroundColor: theme.colors.primary,
  },
})

const ReviewButtons = ({ handleViewRepository, handleDeleteReview }) => {
  const deleteAlert = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: handleDeleteReview,
        },
      ]
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button]} onPress={handleViewRepository}>
        <Text color="white" fontWeight="bold">
          View repository
        </Text>
      </Pressable>
      <Pressable
        style={[styles.button, { backgroundColor: 'red' }]}
        onPress={deleteAlert}
      >
        <Text color="white" fontWeight="bold">
          Delete review
        </Text>
      </Pressable>
    </View>
  )
}
export default ReviewButtons
