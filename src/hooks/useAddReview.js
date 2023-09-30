import { useMutation } from '@apollo/client'
import { CREATE_REVIEW } from '../graphql/mutations'

const useAddReview = () => {
  const [createReview, result] = useMutation(CREATE_REVIEW)

  const addReview = async (reviewObj) => {
    const review = {
      ownerName: reviewObj.ownerName,
      repositoryName: reviewObj.repositoryName,
      rating: Number(reviewObj.rating),
      text: reviewObj.review,
    }
    const { data } = await createReview({ variables: { review } })
    return data
  }

  return [addReview, result]
}

export default useAddReview
