import { StyleSheet, View } from 'react-native'
import { format } from 'date-fns'
import Text from '../Utility/Text'
import theme from '../../themes/theme'
import Spinner from '../Utility/Spinner'

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  ratingContainer: {
    height: 60,
    width: 60,
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    borderRadius: 50,
    justifyContent: 'center',
  },
  rating: {
    textAlign: 'center',
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: 24,
  },
  reviewContainer: {
    display: 'flex',
    flex: 1,
    paddingRight: 10,
  },
  reviewField: {
    paddingTop: 10,
  },
})

const formatDate = (date) => {
  return format(new Date(date), 'dd.MM.yyyy')
}

const ReviewItem = ({ review, username }) => {
  const { text, rating, createdAt, user } = review

  if (!review) {
    return <Spinner size="large" />
  }

  const formattedDate = formatDate(createdAt)

  return (
    <View style={styles.flexRow}>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
      <View style={styles.reviewContainer}>
        <View style={styles.reviewField}>
          <Text fontWeight="bold">{username ? username : user.username}</Text>
        </View>
        <View style={styles.reviewField}>
          <Text color="textSecondary">{formattedDate}</Text>
        </View>
        <View style={styles.reviewField}>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  )
}

export default ReviewItem
