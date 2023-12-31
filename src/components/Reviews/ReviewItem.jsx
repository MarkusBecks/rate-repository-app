import { StyleSheet, View } from 'react-native'
import { format } from 'date-fns'
import Text from '../Utility/Text'
import theme from '../../themes/theme'
import Spinner from '../Utility/Spinner'
import ReviewButtons from './ReviewButtons'
import useDeleteReview from '../../hooks/useDeleteReview'
import { useNavigate } from 'react-router-native'

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

const ReviewItem = ({ review }) => {
  const { text, rating, createdAt, repository, user, id } = review
  const [removeReview] = useDeleteReview()
  const navigate = useNavigate()

  const handleDeleteReview = async () => {
    try {
      await removeReview(id)
    } catch (e) {
      console.error('Error deleting review:', e)
    }
  }

  const handleViewRepository = () => {
    navigate(`/${repository.id}`)
  }

  if (!review) {
    return <Spinner size="large" />
  }

  const formattedDate = formatDate(createdAt)

  return (
    <>
      <View style={styles.flexRow}>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating}</Text>
        </View>
        <View style={styles.reviewContainer}>
          <View style={styles.reviewField}>
            {/* render the username as title for RepositoryList
             and repository's full name as title for MyReviews component */}
            {!user ? (
              <Text fontWeight="bold">{repository.fullName}</Text>
            ) : (
              <Text fontWeight="bold">{user.username}</Text>
            )}
          </View>
          <View style={styles.reviewField}>
            <Text color="textSecondary">{formattedDate}</Text>
          </View>
          <View style={styles.reviewField}>
            <Text>{text}</Text>
          </View>
        </View>
      </View>
      {/* only render ReviewButtons for MyReviews component */}
      {!user && (
        <ReviewButtons
          handleDeleteReview={handleDeleteReview}
          handleViewRepository={handleViewRepository}
        />
      )}
    </>
  )
}

export default ReviewItem
