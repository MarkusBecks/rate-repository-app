import { useMutation } from '@apollo/client'
import { DELETE_REVIEW } from '../graphql/mutations'
import { ME } from '../graphql/queries'

const useDeleteReview = () => {
  const [deleteReview, result] = useMutation(DELETE_REVIEW, {
    awaitRefetchQueries: true,
    refetchQueries: [{ query: ME, variables: { includeReviews: true } }],
  })

  const removeReview = async (deleteReviewId) => {
    await deleteReview({ variables: { deleteReviewId } })
  }

  return [removeReview, result]
}

export default useDeleteReview
