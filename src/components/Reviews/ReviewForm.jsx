/* eslint-disable no-unused-vars */
import { View, StyleSheet, Pressable } from 'react-native'
import FormikTextInput from '../Utility/FormikTextInput'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-native'
import theme from '../../themes/theme'
import Text from '../Utility/Text'
import * as yup from 'yup'
import useAddReview from '../../hooks/useAddReview'

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    backgroundColor: 'white',
    paddingVertical: 40,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 15,
    alignItems: 'center',
    elevation: 4,
  },
})

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup
    .number()
    .min(0, 'Rating must be greater than or equal to 0')
    .max(100, 'Rating must be less than or equal to 100')
    .required('Rating is required'),
  review: yup.string(),
})

export const ReviewFormContainer = ({ onSubmit }) => {
  const submitHandler = async (values) => {
    // Call the onSubmit prop with just the form values
    onSubmit(values)
  }

  return (
    <Formik
      initialValues={{
        ownerName: '',
        repositoryName: '',
        rating: '',
        review: '',
      }}
      onSubmit={submitHandler}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <View style={styles.formContainer}>
          <FormikTextInput
            name="ownerName"
            placeholder="Repository owner name"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <FormikTextInput
            name="review"
            placeholder="Review"
            multiline={true}
          />
          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text color="white" fontWeight="bold" fontSize="subheading">
              Create a review
            </Text>
          </Pressable>
        </View>
      )}
    </Formik>
  )
}

const ReviewForm = () => {
  const [addReview] = useAddReview()
  const navigate = useNavigate()

  const onSubmit = async (values) => {
    const data = await addReview(values)
    console.log('reviewform data: ', data)
    const reviewUrl = `${data.createReview.repository.ownerName}.${data.createReview.repository.name}`
    console.log('reviewUrl: ', reviewUrl)

    navigate(`/${reviewUrl}`)
  }
  return <ReviewFormContainer onSubmit={onSubmit} />
}

export default ReviewForm
